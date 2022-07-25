import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
    GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {getDatabase, ref, set, onValue} from "firebase/database";

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            await signInWithEmailAndPassword(getAuth(), email, password)
                .catch((error) => {
                    commit('setError', error)
                })
        },
        async logInWithGoogle({commit}) {
            const db = getDatabase()
            const user = (await signInWithPopup(getAuth(), new GoogleAuthProvider())).user
            onValue(ref(db, `/users/${user.uid}`), async snapshot => {
                if (!snapshot.exists()) {
                    await set(ref(db, `/users/${user.uid}/info`), {
                        bill: 1000,
                        name: user.displayName,
                    })
                        .catch((error) => {
                            commit('setError', error)
                        })
                }
            })
        },
        async register({dispatch, commit}, {email, password, name}) {
            const auth = await getAuth()
            await createUserWithEmailAndPassword(auth, email, password)
                .then( async () => {
                    const uid = auth.currentUser.uid
                    await set(ref(getDatabase(),`/users/${uid}/info`),{
                        bill: 1000,
                        name
                    })
                }).catch((error) => {
                    commit('setError', error)
                })
        },
        async logout({commit}) {
            await signOut(getAuth()).catch((error) => {
                commit('setError', error)
            })
            commit('clearInfo')
        }
    }

}
