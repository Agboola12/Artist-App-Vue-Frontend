<template>
    <div>
      <input type="file" @change="handleFileSelect" accept=".mp3" />
      <button @click="convertToBytes">Convert to Bytes</button>
    </div>
  </template>
  
  <script>
    export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
    },
    convertToBytes() {
      if (!this.selectedFile) {
        console.error('No file selected');
        return;
      }

      const reader = new FileReader();

      reader.onload = (event) => {
        const arrayBuffer = event.target.result;

        // Now you have the music file in bytes as an ArrayBuffer
        console.log('Music in bytes:', arrayBuffer);
      };

      reader.readAsArrayBuffer(this.selectedFile);
      console.log(this.selectedFile)
    },
  },
};
</script>
