import axios from "axios"
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Register from '../user/Register.vue'
import Login from '../user/Login.vue'
import Landing from '../Landing.vue'
import AllUser from '../user/booking/AllUser.vue'
import BookingOne from '../user/booking/BookingOne.vue'
import BookingTwo from '../user/booking/BookingTwo.vue'
import BookingThree from '../user/booking/BookingThree.vue'
import BookingFour from '../user/booking/BookingFour.vue'
import BookingFive from '../user/booking/BookingFive.vue'
import BookingSix from '../user/booking/BookingSix.vue'
import BookingSeven from '../user/booking/BookingSeven.vue'
import BookingEight from '../user/booking/BookingEight.vue'
import BookingNine from '../user/booking/BookingNine.vue'
import BookingTen from '../user/booking/BookingTen.vue'
import Booking from '../user/booking/Booking.vue'
import ArtistProfile from '../user/booking/ArtistProfile.vue'
import Land from '../Land.vue'
import Home from '../Home.vue'
import MusicArtist from '../user/music/MusicArtist.vue'
import AllMuscians from '../user/music/AllMuscians.vue'
import Bands from '../user/music/Bands.vue'
import Djs from '../user/music/Djs.vue'
import DashboardArtist from '../artist/DashboardArtist.vue'
import ProfileArtist from '../artist/ProfileArtist.vue'
import NavArtist from '../artist/NavArtist.vue'
import MyMusic from '../artist/MyMusic.vue'
import FooterArtist from '../artist/FooterArtist.vue'
import AudioArtist from '../artist/AudioArtist.vue'
import LoginArtist from '../artist/LoginArtist.vue'
import RegisterArtist from '../artist/RegisterArtist.vue'
import SongDetails from '../artist/SongDetails.vue'
import HomeUser from '../user/music/HomeUser.vue'
import UserSideBar from '../user/UserSideBar.vue'
import AllArtist from '../user/music/AllArtist.vue'

axios.interceptors.request.use((value) =>{
  value.headers = {
    "Authorization" : localStorage.getItem("token")
  };
  return value;
})


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  path: '/',  name: 'landing',  component: Landing},
    {  path: '/land',  name: 'land',  component: Land},
    
    {  path: '/about',  name: 'about',  component: () => import('../views/AboutView.vue')},   
    {  path: '/register',  name: 'register',  component: Register},
    {  path: '/login',  name: 'login',  component: Login},
    {  path: '/alluser',  name: 'alluser',  component: AllUser},
    {  path: '/bookingone',  name: 'bookingone',  component: BookingOne},
    {  path: '/bookingtwo',  name: 'bookingtwo',  component: BookingTwo},
    {  path: '/bookingthree',  name: 'bookingthree',  component: BookingThree},
    {  path: '/bookingfour',  name: 'bookingfour',  component:BookingFour},
    {  path: '/bookingfive',  name: 'bookingfive',  component:BookingFive},
    {  path: '/bookingsix',  name: 'bookingsix',  component:BookingSix},
    {  path: '/bookingseven',  name: 'bookingseven',  component:BookingSeven},
    {  path: '/bookingeight',  name: 'bookingeight',  component:BookingEight},
    {  path: '/bookingnine',  name: 'bookingnine',  component:BookingNine},
    {  path: '/bookingten',  name: 'bookingten',  component:BookingTen},
    {  path: '/booking',  name: 'booking',  component:Booking},
    {  path: '/musicartist',  name: 'musicartist',  component:MusicArtist},
    {  path: '/artistprofile',  name: 'artistprofile',  component: ArtistProfile},
    {  path: '/allmuscians',  name: 'allmuscians',  component: AllMuscians},
    {  path: '/bands',  name: 'bands',  component: Bands},
    {  path: '/djs',  name: 'djs',  component: Djs},
    {  path: '/profileartist',  name: 'profileartist',  component: ProfileArtist},
    {  path: '/home',  name: 'home',  component: Home},
    {path: '/dashboardartist' , name: 'dashboardartist', component: DashboardArtist},
    {path: '/navartist' , name: 'navartist', component: NavArtist},
    {path: '/mymusic' , name: 'mymusic', component: MyMusic},
    {path: '/footerartist' , name: 'footerartist', component: FooterArtist},
    {path: '/audioartist' , name: 'audioartist', component: AudioArtist},
    {path: '/loginartist' , name: 'loginartist', component: LoginArtist},
    {path: '/registerartist' , name: 'registerartist', component: RegisterArtist},
    {path: '/songdetails' , name: 'songdetails', component: SongDetails},
    {path: '/homeuser' , name: 'homeuser', component: HomeUser},
    {path: '/usersidebar' , name: 'usersidebar', component: UserSideBar},
    {path: '/allartist' , name: 'allartist', component: AllArtist},
    

    
    
  ]
})

export default router
