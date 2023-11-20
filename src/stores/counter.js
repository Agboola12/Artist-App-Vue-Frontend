import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  
  const users= ref([])
  const book= ref([])

  function bookingOne(user) {
    users.push(user)
    }

  function bookingTwo(info) {
    book.push(info)
    }

  return {  bookingOne,bookingTwo,users }
  })
  
  

