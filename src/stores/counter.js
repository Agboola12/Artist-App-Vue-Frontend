import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // const users= ref([])
  // const updateUsers = computed((info)=> users.value.push(info) )
  
  function bookingInfo(user) {
    const users= ref([])
    users.push(user)
    // users.value={...users.value,...user}

  }

  return {  bookingInfo }
})
