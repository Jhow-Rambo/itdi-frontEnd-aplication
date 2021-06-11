<template>
    <div class="Inference">
        <div v-if="toogle" class="inferenceContainer">
            <font-awesome-icon :icon="returnIcon" class="icon-return" @click="handleToogle()"/>
            <div class="infoContainer">
                <div class="containerNormalImage"><font-awesome-icon :icon="Image" class="iconImage"/></div>
                <div class="containerInferedImage"><font-awesome-icon :icon="Image" class="iconImage"/></div>
            </div>
            <div class="space"></div>
        </div>
        <div v-if="!toogle" class="mainDashboardCardsContainer">
            <div @click="handleToogle()" class="cardContainer">
                <div class="Image">
                    <div class="icons">
                        <font-awesome-icon :icon="Image" />
                    </div>
                </div>
                <div class="detail"></div>
                <div class="informations">
                    <div class="inference">
                        <p>Inference: Person - 80%</p>
                    </div>
                    <div class="data">
                        <p>Data: 11/06/2021</p>
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
        toogle: false
        }
    },
    methods: {
        handleToogle() {
            this.toogle = !this.toogle
        }
    }

}
</script>

<style lang='scss' scoped>
@import "./_inferenceCards.scss";
</style>