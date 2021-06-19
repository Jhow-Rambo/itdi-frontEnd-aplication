<template>
<div class="main">
  <div class="sidebar-container">
      <div class="logo-container">
        <h1>ITDI</h1>
      </div>
      <ul class="options">
          <div @click="changeSection('Dashboard')" class="li-container">
              <li>Dashboard</li>
          </div>
          <div @click="changeSection('Inference')" class="li-container">
              <li>Inference</li>
          </div>
          <div @click="changeSection('Inventory')" class="li-container">
              <li>Inventory</li>
          </div>

      </ul>
      <footer>
          <p>Created by Jhonatan</p>
      </footer>
  </div>
  <div class="main-cards-container">
        <component :is='selectedSection'/>
  </div>
</div>
</template>

<script>
import DashboardCards from '../Cards/DashboardCards/DashboardCards.vue'
import InferenceCards from '../Cards/InferenceCards/InferenceCards.vue'
import InventoryCards from '../Cards/InventoryCards/InventoryCards.vue'

export default {
    name: "sideBar",
    components:{
        DashboardCards,
        InferenceCards,
        InventoryCards
    },
    data(){
        return{
            selectedSection: 'DashboardCards'
        }
    },
    methods:{
        changeSection(section){
            if(section == 'Dashboard') return this.selectedSection = 'DashboardCards'
            else if(section == 'Inference') return this.selectedSection = 'InferenceCards'
            else return this.selectedSection = 'InventoryCards'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./_sideBar.scss";
</style>