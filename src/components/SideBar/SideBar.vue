<template>
    <div class="main">
        <div class="space"></div>
    <div class="sidebar-container">
        <div class="logo-container">
            <h1>ITDT</h1>
        </div>
        <ul class="options">
            <div @click="checkScreen">
                <router-link to="/dashboard" class="li-container">
                    <div>
                        <font-awesome-icon :icon="DashboardIcon"/>
                        <li>Painel</li>
                    </div>
                </router-link>
            </div>
            <div @click="checkScreen">
                <router-link to='/totens' class="li-container">
                    <div>
                        <font-awesome-icon :icon="TotensIcons"/>
                        <li>Totens</li>
                    </div>
                </router-link>
            </div>
            <div class="li-container">
                <div>
                    <font-awesome-icon :icon="ConfIcon"/>
                    <li>Configurações</li>
                </div>
            </div>
        </ul>
        <footer>
            <p>Fundação Parque Tecnológico de Itaipu</p>
        </footer>
    </div>
    <div class="section" @click="closeMenu()"></div>
    <div class="main-cards-container" v-if="hasData">
        <div class="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <!-- <component :is='selectedSection'/> -->
    </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
        FontAwesomeIcon
    },
    data(){
        return{
            selectedSection: 'DashboardCards',
            DashboardIcon: faChartArea,
            TotensIcons: faDesktop,
            ConfIcon: faCog
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