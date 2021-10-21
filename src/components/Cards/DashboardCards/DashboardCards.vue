<template>
    <div class="main-cards-container">
        <div class="cards-container">
            <div class="Cards-inference">
                <div class="info-inference">
                    <div class="last-time">
                        <h2>Última Detecção</h2>
                        <div class="detail"></div>
                        <div class="date"><h2>Data: {{getLastInferenceDate(lastInference.created_at, 'date')}}</h2></div>
                        <div class="hour"><h2>Hora: {{getLastInferenceDate(lastInference.created_at, 'hour')}}</h2></div>
                    </div>
                    <div class="inferred">
                        <h2>Detectado</h2>
                        <div class="detail"></div>
                        <div class="inference"><h2>{{getLastInference(lastInference.inference)}}</h2></div>
                    </div>
                </div>
                <div class="graphic">
                    <div class="graphicContainer">
                        <apexchart :width="setWidthGraphic()" :height="setHeightGraphic()" type="bar" :options="options" :series="series"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import { api } from '@/services/index';
import { mapActions, mapGetters } from 'vuex';
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
        }],
        width: 0,
        lastInference: null
    }
  },
  created() {
    document.documentElement.style.overflow = 'visible';
    window.scrollTo(0, 0);
    this.getInference()
  },
  beforeMount() {
      this.setWidthGraphic()
  },
  computed: {
    ...mapGetters(['getInferences', 'getSelectedInference'])
  },
  methods: {
    ...mapActions([ 'setInferences' ]),
    getInference() {
        api
        .get('/inference')
        .then((response)=>{
            this.lastInference = response.data[response.data.length - 1]
            this.setInferences(response.data); 
        })
        .catch((error)=>{
            console.log(error.response)
            this.$vToastify.error('Não foi possível obter os dados!');
        })
    },
    getLastInference(inference){
            let Inference = []
            for (var index in inference){
                Inference = index + ' - ' + inference[index] + '%'
            }
            return Inference
    },
    getLastInferenceDate(inference, DH){
            let dates = inference.split(' ')
            if (DH == 'date') return dates[0]
            else return dates[1]
    },
    setWidthGraphic(){
        let windowWidth = window.innerWidth;
        if (windowWidth >= 1900) return this.width = 1500
        if (windowWidth >= 600) return this.width = 600
        else if(windowWidth <= 600) return this.width = 300
    },
    setHeightGraphic(){
        let windowWidth = window.innerWidth;
        if (windowWidth >= 1900) return 500
        if (windowWidth >= 600) return 300
        else if(windowWidth <= 600) return 300
    }
  }
}
</script>

<style lang='scss' scoped>
@import './_dashboardCards.scss'
</style>