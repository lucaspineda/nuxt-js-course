import Vuex from 'vuex'
import axios from 'axios'


const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post){
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost){
                const postIndex = state.loadedPosts.findIndex(post => {
                    return post.id === editedPost.id
                })
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                .then(res => {
                    const postsArray = []
                    for(const key in res.data) {
                        postsArray.push({...res.data[key], id: key})
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(error => context.error(error))
            },

            addPost(vueContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios.post(process.env.baseUrl + '/posts.json?auth=' + vueContext.state.token, createdPost)
                    .then(result => {
                        vueContext.commit('addPost', {...createdPost, id: result.data.name})
                    })
                    .catch(error => console.log(error))
            },

            editPost(vueContext, editedPost) {
                return axios.put(process.env.baseUrl +'/posts/' + 
                    editedPost.id + 
                    '.json?auth=' + 
                    vueContext.state.token, editedPost)
                    .then(res => {
                        vueContext.commit('editPost', editedPost)
                    })
                     .catch(e => {console.log(e)}
                )
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            
            authenticateUser(vueContext, authData){
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.firebaseAPIKey
                if(!authData.isLogin) {
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.firebaseAPIKey
                }
                return axios.post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(result => {
                    vueContext.commit('setToken', result.data.idToken)
                    localStorage.setItem('token', result.data.idToken)
                    localStorage.setItem('tokenExpiration', new Date().getTime() + result.data.expiresIn)
                    vueContext.dispatch('setLogoutTimer', result.data.expiresIn * 1000)
                })
                .catch(error => console.log(error))
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },

            initAuth(vueContext) {
                const token = localStorage.getItem('token')
                const expirationDate = localStorage.getItem('tokenExpiration')

                if (new Date() > expirationDate || !token) {
                    return
                }
                vueContext.commit('setToken', token)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore