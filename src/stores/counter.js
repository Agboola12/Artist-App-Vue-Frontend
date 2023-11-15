import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const users= ref([ ])
  const doubleCount = computed(() => count.value * 2)

  function bookingInfo(user) {
    users.push(user)
  }

  return { count, doubleCount, increment }
})
