import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGlobalStoreStore = defineStore('global_store', {
    state: () => ({
        count: 0
    }),
    getters: {},
    actions: {
        increment() {
            this.count++
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStoreStore, import.meta.hot))
}
