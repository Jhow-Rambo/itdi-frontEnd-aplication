<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="6" lg="3">
                <v-card
                    class="mx-auto"
                    width="344"
                    elevation="" outlined
                >
                    <v-card-title class="pl-4 py-4 card-toten-title">
                        Toten Piloto
                    </v-card-title>
                    <!-- <v-divider class="mx-4"></v-divider> -->
                    <v-card-actions>
                        <v-btn
                            @click="changeSection('cards')"
                            color="#9CCC65"
                            text
                        >
                            Abrir
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-row>
                                <div class="row-info-toten">
                                    <h4>Localização:</h4>
                                    <div class="informations-toten">Trilha PTI</div>
                                </div>
                            </v-row>
                            <v-row >
                                <div class="row-info-toten">
                                    <h4>Descrição:</h4>
                                    <div class="informations-toten">Toten de testes </div>
                                </div>
                            </v-row>
                            <v-row >
                                <div class="row-info-toten">
                                    <h4>Último envio:</h4>
                                    <div class="informations-toten">xx/xx/xxxx</div>
                                </div>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn
                                        color="orange lighten-2"
                                        text
                                        class="ml-4"
                                    >
                                        Alterar
                                    </v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col>
                                    <v-btn
                                        color="#EF5350"
                                        text
                                        class="mr-4"
                                    >
                                        Excluir
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
        <div class="circle" @click="toTop">
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
            selectedSection: 'DashboardCards',
            selectedInference: {},
            toogle: false,
            items: null,
            fakeTotens: [0],
            show: false,
            images: []
        }
    },
    created(){
        document.documentElement.style.overflow = 'visible';
        window.scrollTo(0, 0);
        this.handleInferences();
        this.checkScreen();
    },
    computed: {
        ...mapGetters(['getInferences', 'getSelectedInference'])
    },
    methods: {
        error(){
            this.$vToastify.error('Em desenvolvimento...');
        },
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