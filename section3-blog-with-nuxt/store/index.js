import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts',
                            [{
                                id: '1',
                                title: 'First Post',
                                previewText: 'This is our first post!',
                                thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
                            },
                            {
                                id: '2',
                                title: 'second Post',
                                previewText: 'This is our second post!',
                                thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
                            },
                            {
                                id: '3',
                                title: 'third Post',
                                previewText: 'This is our third post!',
                                thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
                            }]
                        )
                        resolve();
                    }, 5000)
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore