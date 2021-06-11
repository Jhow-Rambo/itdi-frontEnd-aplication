<template>
  <div>
    <navBar/>
    <sideBar/>
  </div>
</template>

<script>
import navBar from "../components/NavBar/NavBar.vue"
import sideBar from "../components/SideBar/SideBar.vue"

export default {
  name: 'AdminDashboard',
  components:{
    navBar,
    sideBar
  }
}
</script>

<style lang='scss' scoped>

</style>