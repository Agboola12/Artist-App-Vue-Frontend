<template>
    <div class="body">
        <NavArtist/>
    </div>
  
</template>

<script>
import axios from "axios";
import NavArtist from "./NavArtist.vue";


export default {
    data() {
        return {
            id: '',
            artistName: "",
        };
    },
    created() {
        this.fetchUserProfile();
        this.artistNotice();
    },
    methods: {
        fetchUserProfile() {
            axios.get("http://localhost:8000/getArtist")
                .then((res) => {
                        // console.log(res.data.data.id)
                    this.id = res.data.data.id;
                  this.artistName = res.data.data.firstName
                
            axios.get(`http://localhost:8000/artistNotice/${this.id}`)
                .then((res) => {
                console.log(res.data);
            })
                .catch((error) => {
                console.error(error);
            });

        })
                .catch((error) => {
                console.error(error);
            });
        },

        artistNotice() {
            console.log(this.id)
            // axios.get(`http://localhost:8000/artistNotice/${this.id}`)
            //     .then((res) => {
            //     console.log(res.data);
            // })
            //     .catch((error) => {
            //     console.error(error);
            // });
        }
    },
    components: { NavArtist }
}
</script>