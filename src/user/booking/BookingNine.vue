<template>
    <div class="container "  style="margin-top: 5em;  ">
        <!-- <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a> -->
      <form action="post" enctype="multipart/form-data" @submit.prevent="onSend" class="col-sm-5 " style="margin-left: 25%;">
          <h1 class="mx-5">Booking</h1>
          <hr class="w-50 mx-4"/>
          <div class="mt-5">
              <h4>Give more information about the progarm </h4>
              <p>Give musicians as much information as possible about your progarm,
                 including venue requirements, and any other relevant details. </p>
              <textarea type="text" v-model="information" class="form-control" placeholder="More Information about the program"> </textarea>
             
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
            information:'',
        }
    },
    created(){

    },
    methods:{

      onSend(){
            
          let getUsers = localStorage.users?JSON.parse(localStorage.getItem ("users")):{};
            localStorage.setItem('users', JSON.stringify({...getUsers,information:this.information }))
           this.$router.push('/bookingten')
            }

    }

}
</script>

<style scoped>

.container{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn{
      background-color: #A10035;
  }

  .button {
  border: none;
  border-radius: 5px;
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