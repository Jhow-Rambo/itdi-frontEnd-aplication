<template>
    <v-main>
        <v-container fluid class="px-8">
            <v-row>
                <v-col cols="12" lg="5" md="5">
                    <v-card elevation="2" outlined min-height="133">
                        <v-card-title class="px-4 font-weight-bold header-2 justify-center text-h5">Última detecção</v-card-title>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                            <v-row>
                                <v-card-subtitle 
                                class="my-2 px-6 text-subtitle-1 sub-title font-weight-medium"
                                >
                                Data: {{getLastInferenceDate(lastInference.created_at, 'date')}}</v-card-subtitle>
                            </v-row>
                            <v-row>
                                <v-card-subtitle 
                                class="my-2 px-6 text-subtitle-1 sub-title font-weight-medium"
                                >
                                Hora: {{getLastInferenceDate(lastInference.created_at, 'hour')}}</v-card-subtitle>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" lg="5" md="5" class="mt-lg-0 mt-md-0 mt-6">
                    <v-card elevation="2" outlined min-height="133">
                        <v-card-title class="px-4 font-weight-bold header-2 justify-center text-h5">Detectado</v-card-title>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                            <v-row justify="center" class="mt-6">
                                <v-card-subtitle 
                                class="my-2 px-6 text-subtitle-1 sub-title font-weight-medium"
                                >
                                {{getLastInference(lastInference.inference)}}</v-card-subtitle>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="mb-6">
                    <v-card
                        id="graphic-card"
                        class="mx-auto mt-6"
                        elevation="2" outlined
                    >
                        <div class="graphicContainer">
                            <apexchart :width="setWidthGraphic()" :height="setHeightGraphic()" type="bar" :options="options" :series="series"></apexchart>
                        </div>
                        <!-- <v-divider class=""></v-divider> -->
                        <v-card-actions class="mr-4">
                            <v-btn
                                color="orange lighten-2"
                                text
                                class="ml-4"
                            >
                                Atualizar
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn
                                icon
                                @click="expand = !expand"
                            >
                                <v-icon>{{ expand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="expand">
                                <v-divider></v-divider>

                                <v-card-text class="d-flex justify-start pa-4 text-justify">
                                Métrica referente a quantidade total de objetos identificados em todos os Totens.
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import { api } from '@/services/index';
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { mapActions, mapGetters } from 'vuex';
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

export default {
    name: "DashboardCards",
    data () {
    return {
        show: false,
        expand: false,
        DashboardIcon: faChartArea,
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
    ...mapGetters(['getInferences', 'getSelectedInference']),
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
        console.log(document.getElementById('graphic-card'))
        let windowWidth = window.innerWidth;
        if (windowWidth >= 1900) return this.width = 1600
        if (windowWidth >= 600) return this.width = 1200
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