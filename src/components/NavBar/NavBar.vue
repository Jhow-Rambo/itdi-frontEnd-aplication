<template>
  <div class="nav">
      <div class="space"></div>
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
export default {
    name: "navBar",
    methods:{
        error(){
            this.$vToastify.error('Under Development...');
        }
    }
}
</script>

<style lang="scss" scoped>
@import './_navBar.scss'
</style>