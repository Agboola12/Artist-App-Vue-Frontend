<template>
    <div class="body">
        <NavArtist/>
        <div class=" container text-center mt-5">
            <h1>My <b>Music</b> </h1>
            <p>Ready to get your music out there?</p>
            <p>We've got you covered. Just select a release type to get started:</p>
            
            <div class="row  mt-5">
                <div class="col-md-5 col-sm-1 card shadow mr-5 mb-3 p-5">
                    <h2>Music</h2>
                    <i class="h2 fa fa-file-audio "></i>
                <a href="audioartist">
                    <input type="button" value="Create New"  class=" btn btn p-3  mx-auto" />
                </a>  
                </div>
                <div class="col-md-5 col-sm-1 card shadow   p-5" >
                    <h2>Video</h2>
                    <i class="h2 fa fa-file-video"></i>
                    <input type="buton" value="Create New" @click="videoNew()" class="mx-auto p-3 btn btn " /> 
                </div>
            </div>
        </div>
        <div class="body w-100 mt-5" id="footer" >
          <FooterArtist/>
        </div>
    </div>
</template>

<script>
import FooterArtist from './FooterArtist.vue';
import NavArtist from './NavArtist.vue';

export default {
    components: { NavArtist, FooterArtist },
    data(){
        return{
        }
    },
    created(){
    },
    methods:{

        videoNew(){
            alert("This page is under contruction")
        }
    }
}
</script>

<style scoped>

.body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card{
    color: white;
    background-color: #a10035;
    border-radius: 20px;
}

.card .btn{
    color: white;
}
.card .btn:hover {
    margin-top: 1em;
    border-radius: 20px;
    color: black;
    /* width: 50%; */
    /* height: 10vh; */
    background: #FEDCDC;
    width: 150px;
}



</style>