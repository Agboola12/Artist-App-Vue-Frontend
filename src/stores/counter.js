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

  const pinia = createPinia();
  
  export const useMyStore = pinia(() => {
  const state = {
    artistType: '',
    musicType: '',
  };

  const setArtistType = (newType) => {
    state.artistType = newType;
  };

  const setMusicType = (newType) => {
    state.musicType = newType;
  };

  return {
    ...state,
    setArtistType,
    setMusicType,
  };
});

