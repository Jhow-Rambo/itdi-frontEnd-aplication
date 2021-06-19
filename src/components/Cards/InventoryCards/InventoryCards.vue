<template>
    <div>
        <h1>Inventory Cards</h1>
        <h2>{{data}}</h2>
    </div>
</template>

<script>
import { api } from '@/services/index';

export default {
    name: "InventoryCards",
    data(){
        return {
            data: {}
        };
    },
    created() {
        this.getData();
    },
    methods:{
        getData(){
            api.get('/inference')
              .then((response) => {
                  this.data = response
              })
              .catch((error) => {
                console.log(error.response);
                });
        }
    }
}

</script>

<style>

</style>