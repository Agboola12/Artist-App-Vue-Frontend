<template>
  <UserSideBar/>
  <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-md-4">

          </div>
        </div>

      </div>
  </div>

</template>

<script>
import UserSideBar from '../UserSideBar.vue';

export default {
    components: { UserSideBar }
}
</script>

<style scoped>

#main-content{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    overflow-x: visible;
  }
</style>