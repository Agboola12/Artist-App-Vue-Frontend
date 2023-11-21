<template>
  <div class="container "  style="margin-top: 5em;  ">
    <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
        <form action="post" enctype="multipart/form-data" @submit.prevent="onSend()" class="col-sm-6 mx-auto " style="border: 1px solid gray; border-style: none; ">
            <h1 class="ml-5">Booking</h1>
            <hr class="w-50 ml-4"/>
            <div class="mt-5">
                <h4>What type of musician are you looking for?</h4>
                <p>Musicians need it to estimate travel times.</p>
                   <input type="date" v-model="date" class="form-control"/>
            </div>
            <div class="mt-3 text-center">
                <button type="submit" class="btn btn text-light  w-50 m-2 ">Next</button>
                <!-- <button class="btn btn text-light  w-25 m-2 "><a href="bookingfour">Next</a></button> -->
            </div>
         </form> 
         </div>  
</template>

<script>
    // import {useCounterStore} from '../../stores/counter.js'
    // import { storeToRefs } from 'pinia'
    
export default {
    data(){
        return{
            // useCounterStore,
            date:'',
            // store: null
        }
    },
    created(){

    },
    methods:{
            
            onSend(){

                // const store = useCounterStore();
                // const {book, bookingTwo} = storeToRefs(store)
                // book.value.push(this.date)
                // console.log(book.value);
                
                
                let getUsers = localStorage.users?JSON.parse(localStorage.getItem ("users")):{};
                localStorage.setItem('users', JSON.stringify({...getUsers,date:this.date}))
                this.$router.push('/bookingfour')

        }
    }

}
</script>

<style scoped>
    button{
        background-color: #A10035;
    }
</style>