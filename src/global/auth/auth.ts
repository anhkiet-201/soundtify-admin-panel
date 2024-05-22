import { defineStore, acceptHMRUpdate } from 'pinia'
import { User } from '../../types/user'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { fireAuth } from '../../firebase/firebase'
import { getUserById } from '../../firebase/fire_store/fire_store'

export const useAuthStore = defineStore('auth', {
    state: () => (
        {
            user: null as User | null
        }
    ),
    getters: {
        isLogined: (state) => state.user != null
    },
    actions: {
        async initialize() {
            onAuthStateChanged(fireAuth, () => {
                this.sync();
            })
        },
        async login(email: string, password: string) {
            try {
                await signInWithEmailAndPassword(fireAuth, email, password);
            } catch(error){
                /// TODO: Display login error
                console.log("Error", error);
            }
        },
        async logout() {
            try {
                await signOut(fireAuth);
            } catch (error) {
                /// TODO: Display login error
                console.log("Error", error);

            }
        },
        async sync() {
            try {
                let user = fireAuth.currentUser;
                if (user == null) {
                    this.user = null;
                    return;
                }
                this.user = await getUserById(user.uid);
                if(this.user?.isAdmin ?? false) {
                    throw "Account access is not authorized";
                }
            } catch(error) {
                /// TODO: Display login error
                this.logout();
                console.log("Error", error);
            }
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}

