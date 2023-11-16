import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const users= ref([])
  // const updateUsers = computed((info)=> users.value.push(info) )

  function bookingInfo(user) {
    users.push(user)
  }

  return {  bookingInfo,users }
})
