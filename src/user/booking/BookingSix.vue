<template>
    <div class="container "  style="margin-top: 5em;  ">
        <!-- <a href="homeuser" style="margin-left: 90%;"><button class="btn btn p-3  ">Go Back Home</button></a> -->
      <form action="post" enctype="multipart/form-data" @submit.prevent="onSend" class="col-sm-5" style="margin-left: 27%;">
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-4">
              <h4>How long will the musician(s) be needed for?</h4>
                 <input type="search" class="form-control" v-model="duration" placeholder="2 hours 30 minutes"/>
          </div>

          <div class="mt-5 text-center">
            <button type="submit" class="button p-3 w-50"> Next</button>
          </div>
       </form> 
       </div>
</template>

<script>
export default {
    data(){
        return{
                duration:''
        }
    },
    created(){

    },
    methods:{

        onSend(){
            let getUsers = localStorage.users?JSON.parse(localStorage.getItem ("users")):{};
            localStorage.setItem('users', JSON.stringify({...getUsers,duration:this.duration, }))
           this.$router.push('/bookingseven')
        }

    }

}
</script>

<style scoped>

.btn{
      color: white;  
      background-color: #A10035;
  }

  .button {
  /* padding: ; */
  border: none;
  border-radius: 5px;
  /* font-weight: bold; */
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #A10035;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #A10035;
}

.button:hover {
  color: white;
  transform: scale(1.1);
  outline: 2px solid #A10035;
  box-shadow: 4px 5px 17px -4px #A10035;
}

.button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #A10035;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.button:hover::before {
  width: 250%;
}

</style>