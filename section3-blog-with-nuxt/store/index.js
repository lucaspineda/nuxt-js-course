import Vuex from 'vuex'
import axios from 'axios'


const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
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
                return axios.post(process.env.baseUrl + '/posts.json', createdPost)
                    .then(result => {
                        vueContext.commit('addPost', {...createdPost, id: result.data.name})
                    })
                    .catch(error => console.log(error))
            },
            editPost(vueContext, editedPost) {
                return axios.put(process.env.baseUrl +'/posts/' + 
                    editedPost.id + 
                    '.json', editedPost)
                    .then(res => {
                        vueContext.commit('editPost', editedPost)
                    })
                    .catch(e => {console.log(e)}
                )
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