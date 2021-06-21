<template>
  <div class="nav">
      <div class="space">
          <font-awesome-icon :icon="returnIcon" class="options-icon" @click="showSidebar()"/>
      </div>
      <div class="title">
          <h2>Bem vindo Rolf!</h2>
      </div>
      <div class="options">
          <button @click="error" class="downloadExcel">Download Inventory</button>
          <button class="buttonLogout" @click="error">Logout</button>
      </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "navBar",
    components: {
        FontAwesomeIcon
    },
    data(){
        return {
            returnIcon: faBars,
        }
    },
    methods:{
        error(){
            this.$vToastify.error('Under Development...');
        },
        showSidebar(){
           document.documentElement.style.overflow = 'hidden';
           document.body.scroll = "no";
           document.getElementsByClassName('sidebar-container')[0].style.display = 'block'
           document.getElementsByClassName('section')[0].style.display = 'block'
           return
        }
    }
}
</script>

<style lang="scss" scoped>
@import './_navBar.scss'
</style>