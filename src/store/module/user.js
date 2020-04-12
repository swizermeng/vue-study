const state = {
    userName: 'swizer'
}
const getters = {
    firstLetter: state => {
        return state.userName.substr(0, 1)
    }
}
const mutations = {}
const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}