<template>
  
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
            id:'',
            // artistName: "",

    };
  },
  created(){
            this.fetchUserProfile();    
            this.artistNotice();
  },

  methods: {

    fetchUserProfile() {
      axios.get("http://localhost:8000/getArtist" )
        .then((res) => {
          this.id = res.data.data.id
        //   this.artistName = res.data.data.firstName
        })
        .catch((error) => {
          console.error(error);
        });
    },

        artistNotice(){
            axios.get(`http://localhost:8000/artistNotice/${this.id}` )
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });

        }
    

  }
}
</script>