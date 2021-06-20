<template>
    <div class="Inference">
        <div v-if="toogle" class="inferenceContainer">
            <font-awesome-icon :icon="returnIcon" class="icon-return" @click="handleToogle(), resetImages()"/>
            <div class="infoContainer">
                <div class="containerNormalImage"><img class="images" :src="normalImageSelected"/></div>
                <div class="containerInferedImage"><img class="images" :src="inferredImageSelected"/></div>
            </div>
            <div class="space"></div>
        </div>
        <div v-if="!toogle" class="mainDashboardCardsContainer">
            <div v-for="(inference, index) in getInferences" 
                :key="index" 
                @click="handleToogle(), setImages(inference.normal_image, inference.inferred_image)" 
                class="cardContainer"
                >
                <div class="Image">
                    <div class="icons">
                        <img :src="imageLink(inference.normal_image)"/>
                    </div>
                </div>
                <div class="detail"></div>
                <div class="informations">
                    <div class="inference">
                        <p>Inference: {{getInference(inference.inference)}}</p>
                    </div>
                    <div class="data">
                        <p>{{inference.created_at}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex';


export default {
    name: "InferenceCards",
    components: {
        FontAwesomeIcon,

    },
    data () {
        return {
            Image: faImage,
            returnIcon: faArrowAltCircleLeft,
            selectedInference: {},
            toogle: false,
            items: null,
            normalImageSelected: '',
            inferredImageSelected: '',
            images: []
        }
    },
    created(){
        this.handleInferences()
    },
    computed: {
        ...mapGetters(['getInferences', 'getSelectedInference'])
    },
    methods: {
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
@import "./_inferenceCards.scss";
</style>