<template>    
    <v-container fluid>
        <font-awesome-icon :icon="returnIcon" v-if="!toogle" class="first-icon-return" @click="changeSection('layoutToken')"/>
        <div v-if="toogle" class="inferenceContainer">
            <font-awesome-icon :icon="returnIcon" class="icon-return" @click="handleToogle(), resetImages()"/>
            <div class="infoContainer">
                <div class="containerNormalImage"><img class="images" :src="normalImageSelected"/></div>
                <div class="containerInferedImage"><img class="images" :src="inferredImageSelected"/></div>
            </div>
            <div class="space"></div>
        </div>
        
        <div v-if="!toogle">
            <v-row class="ma-8">
                <v-col 
                    cols="12"
                    md="6"
                    lg="4" 
                    v-for="(inference, index) in getInferences" 
                    :key="index" 
                >
                    <v-card
                        class="mx-auto mb-6"
                        max-width="344"
                        elevation="2"
                        outlined
                        
                    >
                        <v-img
                        :src="imageLink(inference.normal_image)"
                        height="200px"
                        ></v-img>

                        <v-card-actions>
                        <v-btn
                            color="#9CCC65"
                            text
                            @click="handleToogle(), setImages(inference.normal_image, inference.inferred_image), resetAux()" 
                        >
                            Expandir
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="showInfo(index)"
                        >
                            <v-icon>{{selectedIndex == index ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        
                        </v-card-actions>

                        <v-expand-transition>
                            <!-- v-show="isInfoSelected(index)" -->
                            <div>
                                <div v-show="selectedIndex == index">
                                    <v-divider></v-divider>

                                    <v-row>
                                        <div class="row-info-toten">
                                            <h4>Detectado:</h4>
                                            <div class="informations-toten">{{getInference(inference.inference)}}</div>
                                        </div>
                                    </v-row>
                                    <v-row >
                                        <div class="row-info-toten">
                                            <h4>Data:</h4>
                                            <div class="informations-toten">{{inference.created_at}}</div>
                                        </div>
                                    </v-row>
                                    <v-row >
                                        <div class="row-info-toten">
                                            <h4>Hora:</h4>
                                            <div class="informations-toten">{{inference.created_at}}</div>
                                        </div>
                                    </v-row>
                                </div>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <div v-if="!toogle" class="circle" @click="toTop">
            <font-awesome-icon :icon="upIcon" class="upIcon" />
        </div>
    </v-container>
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
            selectedInference: {},
            toogle: false,
            items: null,
            selectedIndex: undefined,
            normalImageSelected: '',
            inferredImageSelected: '',
            show: false,
            aux: [undefined, undefined],
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
    },
    methods: {
        isInfoSelected(index){
            console.log(index)
            for(let i=0; i<= this.selectedIndex.length; i++) {
                if(this.selectedIndex[i] == index) return true
                else return false
            }
        },
        resetAux() {
            this.selectedIndex = undefined
            this.aux = [undefined, undefined]
            return 
        },
        showInfo(index){
            let aux1 = null

            aux1 = this.aux[1]
            this.aux.pop()
            this.aux.pop()
            this.aux.push(aux1)
            this.aux.push(index)

            if (this.aux[0] == this.aux[1]) {
                this.selectedIndex = undefined
                this.aux = [undefined, undefined]
                return 
            } 

            this.selectedIndex = index
        },
        toTop(){
            window.scrollTo(0, 0);
        },
        changeSection(section){
            this.$emit('event', section)
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
@import "./_inferenceCards.scss";
</style>