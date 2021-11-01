<template>
    <v-container fluid>
        <font-awesome-icon :icon="returnIcon" v-if="!toogle" class="first-icon-return" @click="changeSection('layoutToken')"/>
        <v-row class="my-6">
            <v-spacer></v-spacer>
            <v-col cols="12"  md="6">
                <v-card
                elevation="2"
                outlined
                >
                    <form class="pa-6">
                        <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="20"
                            label="Nome do toten"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            class="py-4"
                        ></v-text-field>
                        <v-text-field
                            v-model="localization"
                            :error-messages="localizationErrors"
                            :counter="20"
                            label="Localização"
                            required
                            @input="$v.localization.$touch()"
                            @blur="$v.localization.$touch()"
                            class="py-4"
                        ></v-text-field>
                        <v-text-field
                            v-model="description"
                            :error-messages="descriptionErrors"
                            :counter="30"
                            label="Descrição"
                            required
                            @input="$v.description.$touch()"
                            @blur="$v.description.$touch()"
                            class="py-4"
                        ></v-text-field>
                        <v-row>
                            <v-col>
                                <v-btn
                                color="#7CB342"
                                dark
                                large
                                class="px-12 mr-2"
                                @click="submit"
                                >
                                    Criar
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn 
                                    color="orange lighten-2"
                                    dark
                                    large
                                    @click="clear"
                                    class="px-12 ml-2"
                                >
                                    Limpar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>

// import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "FormToten",
    components: {
        FontAwesomeIcon,
    },
    // mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      localization: { required, maxLength: maxLength(20) },
      description: { required, maxLength: maxLength(30) },
    },
    data () {
        return {
            name: '',
            localization: '',
            description: '',
            returnIcon: faArrowAltCircleLeft,
        }
    },
    created(){

    },
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Nome é obrigatório.')
            return errors
        },
        localizationErrors () {
            const errors = []
            if (!this.$v.localization.$dirty) return errors
            !this.$v.localization.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.localization.required && errors.push('Localização é obrigatório.')
            return errors
        },
        descriptionErrors () {
            const errors = []
            if (!this.$v.description.$dirty) return errors
            !this.$v.description.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.description.required && errors.push('Descrição é obrigatório.')
            return errors
        },
    
    },
    methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.localization = ''
            this.description = ''
        },
        changeSection(section){
            this.$emit('event', section)
        },
    }

}
</script>

<style lang='scss' scoped>
@import "./_formToten.scss";
</style>