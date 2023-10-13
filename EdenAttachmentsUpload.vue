<template>
  <div class="attachments-upload">
    <div class="attachments-upload--title">
      <p>{{ title }}</p>
      <span>{{
        subtitle ||
        "You can attach any related pictures or documents that will provide more insight."
      }}</span>
      <el-upload
        action=""
        multiple
        :on-change="reviewAttachments"
        :show-file-list="false"
        :auto-upload="false"
        :accept="attachmentsType.toString()"
      >
        <el-button type="plain" icon="eden-icon-upload" size="medium"
          >Add files</el-button
        >
      </el-upload>
    </div>
    <div class="attachments-upload--content">
      <div
        v-for="(attachment, index) in setAttachments"
        :key="index"
        class="attachment"
      >
        <img
          :src="
            getAttachmentImage(attachment.url ? attachment.url : attachment)
          "
          :alt="'X'"
        />
        <!-- <img :src="attachment.url" :alt="'X'" /> -->
        <p>
          {{
            attachment.name
              ? attachment.name
              : attachment.slice(attachment.lastIndexOf("/") + 1)
          }}
        </p>
        <span @click="removeAttachment(index)">Remove</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdenAttachmentsUpload",
  props: {
    title: {
      type: String,
      default: "Attach media",
    },
    subtitle: {
      type: String,
      default: "",
    },
    attachments: {
      type: Array,
      default() {
        return [];
      },
    },
    fileFolder: {
      type: String,
      default: "ungrouped",
    },
    attachmentsType: {
      type: Array,
      default() {
        return [".jpeg,.jpg,.png,.pdf,.doc,.docx,.webp"];
      },
    },
  },
  data() {
    return {
      cloudinaryUrl: "https://api.cloudinary.com/v1_1/eden-life-inc/upload",
      cloudinaryPresetUpload: "zt3wbrxu",
    };
  },
  computed: {
    setAttachments: {
      get() {
        return this.attachments;
      },
      set(value) {
        this.$emit("update:attachments", value);
      },
    },
  },
  methods: {
    getAttachmentType(extension) {
      const images = ["jpg", "jpeg", "png"];
      return images.includes(extension) ? "image" : "file";
    },
    getAttachmentName(name) {
      const extension = name.split(".").pop();
      return name.length > 30 ? `${name.slice(0, 30)}...${extension}` : name;
    },
    getAttachmentImage(url) {
      const extension = url.split(".").pop();
      switch (extension) {
        case "pdf":
          return this.getImage("attachments/pdf.svg");
        case "doc":
          return this.getImage("attachments/doc.svg");
        case "docx":
          return this.getImage("attachments/doc.svg");
        default:
          return url;
      }
    },
    reviewAttachments(file) {
      if (file.size / 1024 / 1024 < 20) {
        let fileObject = {
          name: this.getAttachmentName(file.name),
          size: file.size,
          raw: file.raw,
          url: file.name,
          extension: file.name.split(".").pop(),
        };

        // if (this.getAttachmentType(fileObject.extension) !== "image") {
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //   fileObject.url = reader.result;
        // };
        // reader.readAsDataURL(file.raw);
        this.uploadFile(file, fileObject);
        //   return
        // }

        // this.setAttachments.push(fileObject);
      } else {
        this.$message.error("File cannot be larger than 20MB!");
      }
    },
    removeAttachment(index) {
      this.setAttachments.splice(index, 1);
    },
    uploadFile(event, fileObject) {
      const formData = new FormData();
      const file = event.raw;
      const env =
        process.env.NODE_ENV === "production" ? "production" : "staging";

      formData.append("file", file);
      formData.append("folder", `crm/${env}/${this.fileFolder}`);
      formData.append("upload_preset", this.cloudinaryPresetUpload);
      formData.append("resource_type", "raw");
      fetch(this.cloudinaryUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          fileObject.url = data.secure_url;
          this.setAttachments.push(fileObject);
          setTimeout(() => {
            this.uploading = false;
            this.$emit("uploaded");
          }, 500);
        })
        .catch((error) => {
          const errorMessage = error.response.data;
          if (errorMessage.errors) {
            const errorKeys = Object.keys(errorMessage.errors);
            this.$message.error(errorMessage.errors[errorKeys[0]].join(""));
          } else {
            this.$message.error(errorMessage.message);
          }
          this.uploading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.attachments-upload {
  &--title {
    margin-bottom: 10px;

    p {
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: 5px;
    }

    span {
      color: var(--eden-grey-tertiary);
      font-size: 0.875rem;
      display: inline-block;
      width: 90%;
      line-height: 1.8;
      margin-bottom: 10px;
    }
  }
  &--content {
    margin-top: 20px;

    .attachment {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    img {
      height: auto;
      width: 20px;
      border-radius: 4px;
    }

    p {
      font-weight: 500;
      font-size: 0.875rem;
      margin-left: 5px;
      width: 70%;
    }

    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--eden-red-primary);
      cursor: pointer;
      font-size: 0.875rem;
    }
  }
}
</style>
