<template>
    <div class="container "  style="margin-top: 5em;  ">
        <div class="col-sm-4 mx-auto " style="border: 1px solid gray; border-style: none; ">
            <h1 class="ml-5">Booking</h1>
            <hr class="w-50 ml-4"/>
            <div class="mt-5">
                <h5>What type of musician are you looking for?</h5>
                    <select name="cars" class="form-control" id="cars">
                        <option value="band">Music Band</option>
                        <option value="artiste">Artiste</option>>
                    </select>
            </div>

            <div class="mt-5">
                <h5>What style musician would you like?</h5>
                <select name="cars" class="form-control" id="cars">
                        <option value="band">Band</option>
                        <option value="afro-beat">Afro Beat</option>
                        <option value="juju">Juju</option>
                        <option value="gospel">Gospel</option>
                    </select>
            </div>
            <div class="mt-3 text-center">
                <button class="btn btn text-light  w-25 m-1 ">Back</button>
                <button class="btn btn text-light  w-25 m-1 "><a href="bookingthree">Next</a></button>
            </div>
         </div>   

    </div>
</template>

<script>

export default {

}
</script>

<style scoped>

        button{
            background-color: #A10035;
            color: white;
        }
</style>