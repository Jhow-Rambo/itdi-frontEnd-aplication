<template>
  <v-app-bar app absolute dense dark>
    <v-spacer class="d-lg-none"></v-spacer>
    <v-subheader>Inventário de Fauna</v-subheader>
    <v-spacer/>
    <v-btn
        text
        color="#EF5350"
        small
        large
        >
        Sair
    </v-btn>
  </v-app-bar>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "navBar",
    components: {
        // FontAwesomeIcon
    },
    data(){
        return {
            returnIcon: faBars,
        }
    },
    methods:{
        error(){
            this.$vToastify.error('Em desenvolvimento...');
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
// @import './_navBar.scss'
</style>