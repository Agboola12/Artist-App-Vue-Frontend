<template>
    <div class="container   bg-white rounded"  style="margin-top: 5em;">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
      <form action="post" enctype="multipart/form-data" @submit.prevent="onSend" class="col-sm-4" style="margin-left: 20%;" >
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-4">
              <h4>What type of wedding will this event be?</h4>
              <select name="wedding" class="p-2" style="width: 90%;" v-model="event">
                        <option value="Wedding Program">Wedding Program</option>
                        <option value="afro-beat">Church Concert</option>
                        <option value="juju">Carnival</option>
                    </select>
          </div>

          <div class="mt-5 text-center">
            <button type="submit" class="button p-3 w-50"> Next</button>
              <!-- <button class="btn btn text-light  w-25 m-2 ">Back</button> -->
          </div>
       </form> 
       </div>
</template>

<script>
export default {

}
</script>

<style scoped>

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