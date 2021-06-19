export default {
    state: {
        inferences: null,
        selectedInference: {}
    },
    getters: {
        getInferences: (state) => {
            return state.inferences;
        },
        getSelectedInference: (state) => {
            return state.selectedInference;
        }
    },
    mutations: {
        SET_INFERENCES: (state, payload) => {
            state.inferences = payload;
        },
        SET_SELECTED_INFERENCE: (state, payload) => {
            state.selectedInference = payload
        },
        RESET_SELECTED_INFERENCE: (state) => {
            state.selectedInference = {}
        }
    },
    actions: {
        setInferences: ({ commit }, payload) => {
            commit('SET_INFERENCES', payload);
        },
        setSelectedInference: ({ commit }, payload) => {
            commit('SET_SELECTED_INFERENCE', payload);
        },
        resetSelectedInference: ({ commit }) => {
            commit('RESET_SELECTED_INFERENCE')
        }
    }
};