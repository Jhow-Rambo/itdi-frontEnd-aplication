<template>
  <div>
    <layout/>
    <dashboard/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import dashboard from "../components/Cards/DashboardCards/DashboardCards.vue"

export default {
  name: 'AdminDashboard',
  components:{
    layout,
    dashboard
  }
}
</script>

<style lang='scss' scoped>

</style>