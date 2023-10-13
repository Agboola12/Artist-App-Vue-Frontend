<template>
    <div>
        <div class="container mt-4"  style="text-align: right"  >
            <button id="bttn" type="button" class="btn btn  mr-2">All</button>
            <button id="bttn" type="button" class="btn btn  mr-2">Music Artistes</button>
            <button id="bttn" type="button" class="btn btn  mr-2">Bands</button>
            <button id="bttn" type="button" class="btn btn  mr-2 fa-solid fa-filter-list">Filter</button>
        </div><br/>
        <div class="container">
            <div id="divv">
                <p id="viewall" class="h2 text-center">Popular Musicians</p>
                <p id="viewall" class="ml-5" style="color: #A10035;">View All</p>
            </div><br/><br/>
            <div class="row text-center">
                <div class="col-md-3 ml-5">
                    <div class="card">
                        <img src="../assets/Camera/04.jpg"/>
                        <img src=".../"/>
                        <div class="card-body">
                            <h5 class="card-title">Davido</h5>
                            <p class="card-text">Artiste</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 offset-1">
                    <div class="card">
                        <img src="../assets/Camera/03.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Yemi Alade</h5>
                            <p class="card-text"> Artiste</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-3 offset-1">
                    <div class="card">
                        <img src="../assets/Camera/12.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">The Chase Smoker</h5>
                            <p class="card-text"> Band </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div id="divv">
                <p id="viewall" class="h2 text-center">Recommended For You</p>
                <p id="viewall" style="color: #A10035;">View All</p>
            </div>
            <div class="row text-center">
                <div class="col-md-3 ml-5">
                    <div class="card">
                        <img src="../assets/Camera/05.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Tiwa Savage</h5>
                            <p class="card-text">Artiste</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 offset-1">
                    <div class="card">
                        <img src="../assets/Camera/10.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">AdeKunle Gold</h5>
                            <p class="card-text"> Artiste</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-3 offset-1">
                    <div class="card">
                        <img src="../assets/Camera/11.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Maroon 5</h5>
                            <p class="card-text"> Band </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="  text-center  p-4 mt-5 " style="background-color: #FAD9D9;">
            <h5 class="fs-1">Not sure of what you want?</h5>
            <p class="fs-3">Finding the perfect musician has never been easier</p><br/>
            <button style="background-color: #A10035;" class="btn btn text-light mt-3 fs-3">Find musicians</button>
        </div>

        <div class="mt-5 text-center container ">
            <h5 class="">Categories</h5>
            
                <!-- <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i><br/>Artiste</button>
                <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i><br/>Band</button>
                <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i><br/>DJ</button> -->
                <!-- <button id="categories" ><i class="fa fa-microphone   "></i><br/>Band</button> -->

                <div class="row"> 
                     <div class="col-md-3 ml-5">
                         <p>
                        <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i></button>
                             <br/>   Artiste
                        </p>
                     </div>
                     <div class="col-md-3 offset-1">
                        <p>
                         <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i></button>
                         <br/>Band
                        </p>
                    </div>
                    <div class="col-md-3 offset-1">
                       <p>
                           <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i></button>
                           <br/>DJ
                       </p>    
                    </div>   
                 </div>
        </div>

        <div class="container mt-5">
            <h3 class="ml-5">Wedding Types</h3>
            <hr class="ml-5" style="width: 18%; background-color: #A10035;"/>
            <div class="row mt-4 text-center">
                <div class="col-md-3 ml-5">
                    <div class="card text-light">
                        <img src="../assets/Camera/11.jpg"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Wedding <br/> Reception</h5>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 offset-1">
                    <div class="card text-light">
                        <img src="../assets/Camera/03.jpg"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Traditional <br/> Reception</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 offset-1">
                    <div class="card text-light">
                        <img src="../assets/Camera/05.jpg"/>
                        <div class="card-img-overlay">
                            <h5 class="  card-title">After <br/> Party</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        <div>
            <nav >
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fa fa-home"></i><br/>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-search"></i><br/>Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-book"></i><br/>Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa fa-bell"></i><br/>Notification</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <img src="../assets/Camera/05.jpg" class="images"/><br/>Profile
                        </a>
                    </li>
                    </ul>
            </nav>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            type: 'allArtist'

        }
    },
    mounted(){
        const allArtist = {
                type :this.type 
        }
    //     axios.get("http://localhost/Vue-Php-Project/Php-Backend/config.php" + allArtist)
    //     .then ((res)=>{
    //             console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    }

}
</script>

<style scoped>
    
    #bttn{
        /* border-color: #A10035; */
        color: black;
        border-radius: 15px;
    }
    #bttn:hover{
        color: white;
        background-color: #A10035;
    }
    
    #divv{
        overflow-x: auto;
    }
    #viewall{
        display: inline;
    }

   
    .card{
        border-style: none;
    }

    

    #categories{
        /* width: 10%;
        height: 20vh; */
        border-style: none;
        background-color: #FAD9D9;
        border-radius: 50%;
    }
    
    #categories i{
        border-style: none;
        color: #A10035;
    }

    .images{
        border-radius: 50%;
        height: 10vh;
        width: 70%;
    }

</style>