<template>
    <div class="body">
        <NavArtist/>
        <div class="container ">
            <div class="row">
                    <div class="col-md-3 p-4 mt-5 mx-auto card-client" v-for="(user, index) in users" :key="index" >
                        <div class="user-picture">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                    </svg>
                </div>
                <p class="name-client"> 
                    {{ user.userName }}
                    <span class="mt-2">{{ user.userEmail }}</span>
                    <span class="mt-3" ><button data-toggle="modal" data-target="#myModal"   @click="infoDetails(user.id)" class="btn btn-light details">Details</button></span>
                </p>
                </div>
            </div>
        </div>

    

<!-- Modal -->
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" v-if="datas">
    <div class="modal-content" >
        <div class="modal-header">
            <h4>Booking Information Details</h4>
      </div>
      <div class="modal-header">
        <table class="table table-bordered">
            <tr>
              <th scope="row">1</th>
              <td>Name</td>
              <td>{{ datas.userName }}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Email</td>
              <td>{{ datas.userEmail }}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Artist Type</td>
              <td>{{ datas.artistType }}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Music Type</td>
              <td>{{ datas.musicType }}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Budget</td>
              <td>{{ datas.budget }}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Event</td>
              <td>{{ datas.event }}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Country</td>
              <td>{{ datas.country }}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Address</td>
              <td>{{ datas.address }}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Date</td>
              <td>{{ datas.date }}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Information</td>
              <td>{{ datas.information }}</td>
            </tr>
        </table>
    </div>
    <div class="d-flex mx-auto  p-3">
        <button class="button mr-5" @click="Approve(datas.id)">Approve</button>
        <button class="button" @click="Decline(datas.id)">Decline</button>
    </div>
  </div>
</div>
</div>
  
</template>

<script>
import axios from "axios";
import NavArtist from "./NavArtist.vue";
import BaseUrl from "../BaseUrl.js";


export default {
    data() {
        return {
            id: '',
            artistName: "",
            users: null,
            datas: '',
        };
    },
    created() {
        this.fetchUserProfile();
    },
    methods: {
        fetchUserProfile() {
            axios.get
            (BaseUrl+"getArtist")
                .then((res) => {
                        // console.log(res.data.data.id)
                    this.id = res.data.data.id;
                  this.artistName = res.data.data.firstName
                
                
            axios.get
            (BaseUrl + `artistNotice/${this.id}`)
            // (`http://localhost:8000/artistNotice/${this.id}`)
                .then((res) => {
                // console.log(res.data.user);
                this.users = res.data.user
            })
                .catch((error) => {
                console.error(error);
            });

        })
                .catch((error) => {
                console.error(error);
            });
        },

        infoDetails(id){
            axios.get(BaseUrl + `infoDetails/${id}`)
            .then((res)=>{
                console.log(res.data)
                this.datas = res.data
            })
            .catch((error)=>{
                console.log(error);
            })

        },

        Approve(){
            axios.get(BaseUrl + `infoDetails/${id}`)
            .then
        }

        
    },
    components: { NavArtist }
}
</script>

<style scoped>
.body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-client {
  /* margin-left: 10em;   */
  background: #A10035;
  width: 25rem;
  height: 15em;
  /* padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px; */
  border: 4px solid #A10035;
  box-shadow: 0 6px 10px #A10035;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.card-client:hover {
  transform: translateY(-10px);
}


.user-picture {
  overflow: hidden;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border: 4px solid #fddbdb;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.user-picture svg {
  width: 2.5rem;
  fill: currentColor;
}

.name-client {
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}

.name-client span {
  display: block;
  font-weight: 200;
  font-size: 16px;
}

.button {
  border: none;
  border-radius: 5px;
  /* letter-spacing: 5px; */
  text-transform: uppercase;
  color: #A10035;
  transition: all 1000ms;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #A10035;
}

.button:hover {
  color: white;
  transform: scale(1.1);
  outline: 2px solid #A10035;
  box-shadow: 4px 5px 17px -4px #A10035;
}

.button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #A10035;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.button:hover::before {
  width: 250%;
}



</style>