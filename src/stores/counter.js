import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const users= ref([])

  function bookingInfo(user) {
    users.push(user)
  }

  return {  bookingInfo,users }
})
