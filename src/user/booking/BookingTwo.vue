<template>
    <div class="container "  style="margin-top: 5em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
        <form action="post" enctype="multipart/form-data" @submit.prevent="onCreate" class="col-sm-4" style="margin-left: 30%;" >
            <h1 class="ml-5">Booking</h1>
            <hr class="w-50 ml-4"/>
            <div class="mt-5">
                <h5>What type of musician are you looking for?</h5>
                    <select name="cars" class=" p-2" style="width: 90%;" v-model="artistType" id="cars">
                        <option value="Music Artist">Music Artist</option>
                        <option value="Bands">Bands</option>
                        <option value="Djs">Djs</option>
                    </select>
            </div>

            <div class="mt-5">
                <h5>What style musician would you like?</h5>
                <select name="cars" class="p-2" style="width: 90%;" v-model="musicType">
                        <option value="afroBeat">Afro Beat</option>
                        <option value="hipPop">HipPop</option>
                        <option value="gospel">Gospel</option>
                    </select>
            </div>

            <div class="mt-3 text-center">
                <button type="submit" class="btn btn text-light  w-50 m-1 ">Next</button>
                <!-- <a href="bookingthree"><button class="btn btn text-light  w-25 m-1 ">Next</button></a> -->
            </div>
         </form>   

    </div>
</template>

<script>

export default {
    data(){
        return{
            artistType: " ",
            musicType: " ",
        }
    },
    created(){

    },
    methods:{
        onCreate(){
            
            localStorage.setItem('users', JSON.stringify({artistType:this.artistType,musicType:this.musicType}))
           this.$router.push('/bookingthree')

        }


    }

}
</script>

<style scoped>

        button{
            background-color: #A10035;
            color: white;
        }
</style>