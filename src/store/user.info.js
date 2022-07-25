import {getAuth} from "firebase/auth";
import {getDatabase, ref, onValue} from "firebase/database";

export default {
    state: {
        info: {}
    },
    getters: {
        info: s => s.info
    },
    actions: {
        async fetchInfo({commit}) {
            const uid = getAuth().currentUser.uid
            try {
                onValue(ref(getDatabase(), `/users/${uid}/info`), snapshot => {
                    const info = snapshot.val() || 'Anonymous'
                    commit('setInfo', info)
                }, {
                    onlyOnce: true
                })
            } catch (error) {}
        }
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        }
    }
}
