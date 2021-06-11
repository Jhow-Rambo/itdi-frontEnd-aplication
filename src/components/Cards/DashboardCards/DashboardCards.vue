<template>
    <div class="cards-container">
        <div class="Cards-inference">
            <div class="info-inference">
                <div class="last-time">
                    <h2>Last Time Inferred</h2>
                    <div class="detail"></div>
                    <div class="date"><h2>Date: 11/06/2021</h2></div>
                    <div class="hour"><h2>Hour: 16:04</h2></div>
                    </div>
                <div class="inferred">
                    <h2>Inferred</h2>
                    <div class="detail"></div>
                    <div class="inference"><h2>Person: 82%</h2></div>
                </div>
            </div>
            <div class="graphic">
                <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

export default {
    name: "DashboardCards",
    data () {
    return {
        options: {
            chart: {
            id: 'vuechart-example'
            },
            xaxis: {
            categories: ['Capivaras', 'Cobras', 'Macacos', 'Tigre', 'Aves', 'Girafa', 'Zebra', 'Leão']
            }
        },
        series: [{
            name: 'series-1',
            data: [20, 10, 13, 2, 30, 1, 3, 1]
        }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import './_dashboardCards.scss'
</style>