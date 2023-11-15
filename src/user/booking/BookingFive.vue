 <template>
        <div class="container mx-auto"  style="margin-top: 5em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
          <form action="post" enctype="multipart/form-data" @submit.prevent="onSend" class="col-sm-4" style="margin-left: 30%;">
              <h1 class="ml-5">Booking</h1>
              <hr class="w-50 ml-5"/>
              <div class="mt-4">
                  <h4>What time would you like them to start?</h4>
                     <input type="search" class="form-control" v-model="time" placeholder="2 : 00 pm"/>
              </div>

              <div class="mt-3 text-center">
                  <button class="btn btn text-light  w-50 m-2 ">Back</button>
                  <!-- <button class="btn btn text-light  w-25 m-2 "><a href="bookingsix">Next</a></button> -->
              </div>
           </form> 
           </div>
</template>

<script>
export default {
    data(){
        return{
                time:''
        }
    },
    created(){

    },
    methods:{

        onSend(){
            
        }

    }

}
</script>

<style scoped>

    button{
          background-color: #A10035;
      }

</style>