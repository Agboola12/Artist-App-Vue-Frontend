<template>
    <div class="container "  style="margin-top: 5em;  ">
        <!-- <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a> -->
      <div class="col-sm-6" style="margin-left: 25%; ">
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-5">
              <h4>Would you like to see musicians similar to your taste?</h4>
              <p> Your inquiry will also be sent to similar musicians. </p>
          </div>

          <div class="row mt-5">
            <div class="col-md-6">
              <a href="bookingresult"> <button class="btn btn text-light  w-75">Yes, please</button> </a>
            </div>
            <div class="col-md-6">
            <router-link to="/allartist"><button  id="btn" class="btn btn text-dark w-75 ">No, thanks</button></router-link>    
            </div>
          </div>
       </div> 
       </div>
</template>

<script>
export default {

    data(){
        return{

        }
    },
    created(){

    },
    methods:{

    }

}
</script>

<style scoped>

#btn{
    background-color:#FECDCD !important;
}

button{
      background-color: #A10035;
  }

</style>