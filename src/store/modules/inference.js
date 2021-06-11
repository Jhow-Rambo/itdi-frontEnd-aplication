export default {
    state: {
        inference: {},
        selectedInference: {}
    },
    getters: {
        getInferences: (state) => {
            return state.inference;
        },
        getSelectedInference: (state) => {
            return state.selectedInference;
        }
    },
    mutations: {
        SET_INFERENCE: (state, payload) => {
            state.inference = payload;
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
            commit('SET_INFERENCE', payload);
        },
        setSelectedInference: ({ commit }, payload) => {
            commit('SET_SELECTED_INFERENCE', payload);
        },
        resetSelectedInference: ({ commit }) => {
            commit('RESET_SELECTED_INFERENCE')
        }
    }
};