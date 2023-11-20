import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  
  const users= ref([])
  const user= ref([])

  function bookingOne(user) {
    users.push(user)
    }
    
  function bookingTwo(user) {
    user.push(user)
    }

  return {  bookingOne,bookingTwo,users }
  })
  
  

