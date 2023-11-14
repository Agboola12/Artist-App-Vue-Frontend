<template>
  <div class="container"  style="margin-top: 5em; ">
    <div class="col-sm-5  p-3" style="margin-left: 30%;">
      <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
        <h2 class="text-center">Create an account</h2>
        <div class="form-group">
          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Enter Text</label>
            <div class="underline"></div>
          </div>

          <input
            type="text"
            name="firstName"
            v-model="firstName"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            placeholder="Enter Your Name"
            id="firstName"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            id="email"
            placeholder="Enter email"
          />
        </div>
        
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model="passWord"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div class="mx-5">
          <!-- <button
            type="submit"
            name="submit"
            id="continue"
            class="btn btn w-100 mt-2"
          >
            Continue
          </button> -->
          <button class="button btn btn w-100 mt-2 h-25">
            <span> Button </span>
          </button>
          <br /><br />
          <p>--------- OR ---------</p>
        </div>
      </form>
      <div class="mx-5">
        <button id="sign" class="btn btn ">
          <i class="fa fa-google"></i>Sign up with google
        </button>
        <p class="mt-5">
          Have an account? <a href="login" style="color: #a10035">Sign In</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      firstName: " ",
      email: " ",
      passWord: "",
    };
  },
  methods: {
    

    onCreatePost() {
      
      const info ={
        firstName : this.firstName,
        email : this.email,
        passWord :this.passWord,
      }

      axios
        .post(
          "http://localhost:8000/createUser", info)
        .then((res) => {
          console.log(res);
                    this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err);
        });
    },

    
  },
};
</script>

<style scoped>
#continue {
  background-color: #a10035;
  color: white;
}

#sign {
  background-color: #fedcdc;
  color: black;
  border-style: none;
  background-size: 100%;
  width: 100%;
}

a {
  text-decoration: none;
}



/* From uiverse.io by @Ali-Tahmazi99 */
.button {
 display: inline-block;
 width: 150px;
 height: 50px;
 border-radius: 10px;
 border: 1px solid #a10035;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

.button::before,
.button::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

.button::before {
 left: -10px;
 background: #a10035;
}

.button::after {
 right: -10px;
 background: #a10035;
}

.button:hover::before,
.button:hover::after {
 width: 58%;
}

.button:hover span {
 color: white;
 transition: 0.3s;
}

.button span {
 color: #a10035;
 font-size: 18px;
 transition: all 0.3s ease-in;
}



.input-container {
  position: relative;
  margin: 50px auto;
  width: 200px;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}

</style>

