<template>
    <div>
        <v-row class="mt-6">
            <v-spacer></v-spacer>
            <v-col cols="6" md="4" lg="2" v-if="isCardsSelected">
                <v-btn
                    outlined
                    color="light-blue darken-1"
                    small
                    large
                    @click="downloadMetrics"
                    >
                    Baixar Métricas
                </v-btn>
            </v-col>
            <v-col cols="6" md="4" lg="2" v-if="isTotenSelected">
                <v-btn
                    outlined   
                    color="teal darken-1"
                    small
                    large
                    @click="createToten"
                    >
                    Criar Toten
                </v-btn>
            </v-col>
        </v-row>
            <v-main>
                <v-container fluid class="px-8">
                    <component :is='selectedSection' @event='selectComponent'/>
                </v-container>
            </v-main>
    </div>

</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex';
import formToten from '../forms/totens/FormToten.vue'
import totens from  './totens/StartTotens.vue'
import cards from  '../Cards/InferenceCards/InferenceCards.vue'
import layout from './totens/StartTotens.vue'

export default {
    name: "LayoutToten",
    components: {
        FontAwesomeIcon,
        totens,
        formToten,
        cards
    },
    data () {
        return {
            Image: faImage,
            returnIcon: faArrowAltCircleLeft,
            selectedSection: totens,
            selectedInference: {},
            toogle: false,
            items: null,
            fakeTotens: [0],
            images: []
        }
    },
    created(){
        document.documentElement.style.overflow = 'visible';
        window.scrollTo(0, 0);
        this.handleInferences()
    },
    computed: {
        ...mapGetters(['getInferences', 'getSelectedInference']),
        isCardsSelected: function () {
            if (this.selectedSection == cards) return true
            else return false
        },
        isTotenSelected: function () {
            if (this.selectedSection == layout) return true
            else return false
        }
    },
    methods: {
        createToten() {
            return this.selectedSection = formToten
        },
        selectComponent(payload) {
            console.log(typeof(payload))
            if(payload == 'cards') return this.selectedSection = cards
            else if(payload == 'layoutToken') return this.selectedSection = layout
        },
        isTotensSection() {
            if(this.selectedSection == layout) return true
            else return false
        },
        downloadMetrics() {
            this.$vToastify.success('Baixando...');
        },
        handleToogle() {
            this.toogle = !this.toogle
        },
        handleInferences(){
            this.items = this.getSelectedInference
            console.log(this.items)
        },
        imageLink(normal_image){
            return normal_image
        },
        setImages(normal_image, inferred_image){
            this.normalImageSelected = normal_image
            this.inferredImageSelected = inferred_image
        },
        resetImages(){
            this.normalImageSelected = ''
            this.inferredImageSelected = ''
        },
        getInference(inference){
            let Inference = []
            for (var index in inference){
                Inference = index + ' - ' + inference[index] + '%'
            }
            return Inference
        }
    }

}
</script>

<style lang='scss' scoped>
@import "./_totens.scss";
</style>