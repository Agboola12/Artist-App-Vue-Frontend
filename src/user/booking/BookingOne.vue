<template>
    
    <div class="container mt-5" >
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
        <div class="col-sm-6" style="border: 1px solid gray; border-style: none; margin-left: 30%; ">
            <h1 class=" ml-5 mb-5 mt-5">How it works</h1>
            <ol >
                <li class="m-4">Tell us about event.</li>
                <li class="m-4"> Relevant musicians are instantly alerted.</li>
                <li class="m-4"> Available musicians respond with tailored quotes.</li>
                <a href="bookingtwo"><button class="btn btn ml-5  w-50 text-light"> Next</button></a>
            </ol>
        </div>


    </div>
</template>

<script>
import UserSideBar from '../UserSideBar.vue'

export default {
  components: { UserSideBar },
  data(){
    return{
        
    }
  }

}
</script>

<style scoped>
    h1{
        color:#A10035;
    }
        button{
            background-color: #A10035;
            color: white;
        }


        
</style>
