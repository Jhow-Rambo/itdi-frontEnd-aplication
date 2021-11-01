<template>
    <div class="main">
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none px-4 pt-2 test"></v-app-bar-nav-icon> -->
        <v-icon @click.stop="showSideBar" class="d-lg-none px-4 test">{{'mdi-menu'}}</v-icon> 
        <v-navigation-drawer app dark mobile-breakpoint="1264" v-model="drawer" class="sideBar">
            <v-list-item color="lime lighten-3" class="logo">
                <v-list-item-content>
                    <v-list-item-title class="text-h9">
                        ITDT
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.path"
                
                >
                    <v-list-item-icon>
                        <v-icon color="#00C853">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-icon>{{TotensIcons}}</v-icon>
            <footer absolute dark>
                <img src="@/assets/logo-pti.png" class="logoPTI"/>
            </footer>
        </v-navigation-drawer>

        
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex';
import { faCog } from '@fortawesome/free-solid-svg-icons'
// import DashboardCards from '../Cards/DashboardCards/DashboardCards.vue'
// import InferenceCards from '../Cards/InferenceCards/InferenceCards.vue'
// import InventoryCards from '../Cards/InventoryCards/InventoryCards.vue'

export default {
    name: "sideBar",
    components:{
        // FontAwesomeIcon
    },
    data(){
        return{
            selectedSection: 'DashboardCards',
            DashboardIcon: faChartArea,
            TotensIcons: faDesktop,
            ConfIcon: faCog,
            items: [
                { title: 'Painel', icon: 'mdi-chart-line', path: '/dashboard'  },
                { title: 'Totens', icon: 'mdi-projector-screen-outline', path: '/totens' },
                { title: 'Configurações', icon: 'mdi-cog-outline' },
            ],
            right: null,
            drawer: null,
        }
    },
    computed: {
        ...mapGetters(['getInferences', 'getSelectedInference']),
        hasData: function () {
            if(this.getInferences === null) {
                console.log('entrou')
                return true
            } 
            else return false
        }
    },
    methods:{
        showSideBar() {
            this.drawer = !this.drawer
        },
        checkScreen() {
            console.log(window.screen.width)
            if(window.screen.width < 1250) {
                document.getElementsByClassName('sidebar-container')[0].style.display = 'none'
                document.getElementsByClassName('section')[0].style.display = 'none'
            }
        },
        changeSection(section){
            if(section == 'Dashboard') return this.selectedSection = 'DashboardCards'
            else if(section == 'Inference') return this.selectedSection = 'InferenceCards'
            else return this.selectedSection = 'InventoryCards'
        },
        closeMenu(){
           document.documentElement.style.overflow = 'auto';
           document.body.scroll = "yes";
           document.getElementsByClassName('sidebar-container')[0].style.display = 'none'
           document.getElementsByClassName('section')[0].style.display = 'none'
           return
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./_sideBar.scss";
</style>