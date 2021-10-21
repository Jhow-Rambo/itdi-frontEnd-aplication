<template>
    <div class="Container">
        <div v-if="isTotensSection" class="subNav">
            <div class="space"></div>
            <div class="buttons-container">
                <Button class="downloadButton" @click="isTotenSelected">Baixar métricas</Button>
                <Button class="createTotenButton">Criar Token</Button>
            </div>
        </div>
        <div class="main-cards-container">
            <component :is='selectedSection' @event='selectComponent'/>
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex';
import totens from  './totens/StartTotens.vue'
import cards from  '../Cards/InferenceCards/InferenceCards.vue'
import layout from './totens/StartTotens.vue'

export default {
    name: "LayoutToten",
    components: {
        FontAwesomeIcon,
        totens,
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
        ...mapGetters(['getInferences', 'getSelectedInference'])
    },
    methods: {
        selectComponent(payload) {
            console.log(payload)
            if(payload == 'cards') return this.selectedSection = cards
            else if(payload == 'layoutToken') return this.selectedSection = layout
        },
        isTotensSection() {
            if(this.selectedSection == layout) return true
            else return false
        },
        isTotenSelected() {
            if(this.selectedSection == layout) {
                this.$vToastify.error('Selecione um Toten');
            }
            else {
                this.$vToastify.success('Baixando...');
            }
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