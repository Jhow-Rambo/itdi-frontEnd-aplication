<template>
  <div>
    <layout/>
    <totens/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import totens from "../components/Totens/LayoutTotens.vue"

export default {
  name: 'AdminDashboard',
  components:{
    layout,
    totens
  }
}
</script>

<style lang='scss' scoped>

</style>