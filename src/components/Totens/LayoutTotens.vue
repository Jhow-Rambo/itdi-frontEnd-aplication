<template>
    <div class="main-cards-container">
        <component :is='selectedSection' @event='selectComponent'/>
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
            if(payload == 'cards') return this.selectedSection = cards
            else if(payload == 'layoutToken') return this.selectedSection = layout
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