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
            <div v-for="(toten, index) in fakeTotens" 
                :key="index" 
                class="cardContainer"
                >
                <div class="headerToten" @click="changeSection('cards')">
                    <div class="status"></div>
                    <div class="totenTitle">Toten Piloto</div>
                </div>
                <div class="description" @click="changeSection('cards')">
                    <div>Localização: XXXX</div>
                    <div>Descrição: XXXX</div>
                    <div>Último envio: XXXX</div>
                </div>
                <div class="detail"></div>
                <div class="actions">
                    <button class="changeButton">Alterar</button>
                    <button class="deletButton">Deletar</button>
                </div>
            </div>
        </div>
        <div class="circle" @click="toTop">
            <font-awesome-icon :icon="upIcon" class="upIcon" />
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
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
            upIcon: faSortUp,
            selectedSection: 'DashboardCards',
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
        changeSection(section){
            this.$emit('event', section)
        },
        toTop(){
            window.scrollTo(0, 0);
        }
    }

}
</script>

<style lang='scss' scoped>
@import "./_startTotens.scss";
</style>