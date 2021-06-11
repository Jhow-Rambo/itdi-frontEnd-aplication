import Vue from 'vue';
import Vuex from 'vuex';
import inference from './modules/inference';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        inference: inference
    }
});