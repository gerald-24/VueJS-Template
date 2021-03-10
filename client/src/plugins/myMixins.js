import {
    mapState,
    mapMutations
} from 'vuex'

const myPlugins = {
    install(Vue) {
        Vue.mixin({
            data: () => ({
                api: process.env.VUE_APP_URL
            }),
            computed: {
                ...mapState([
                ]),
            },
            methods: {
                ...mapMutations([
                ])
            }
        })
    }
}

export default myPlugins