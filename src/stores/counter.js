// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
  
  // const users= ref([])

  // function bookingInfo(user) {
    // users.push(user)
    // }

  // return {  bookingInfo,users }
  // })
  
  
  // store.js
  import { createPinia } from 'pinia';
  
  export const useMyStore = createPinia(() => {
    const state = {
      data: ({}),
    };
  
    const setData = (newData) => {
      state.data = newData;
    };
  
    return {
      ...state,
      setData,
    };
});

