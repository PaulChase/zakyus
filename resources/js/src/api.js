const axios = window.axios;

export default {
    getAllPosts: () => {
        return axios.get("/api/posts");
    },
    getSinglePost: (id) => axios.get(`/api/posts/${id}`),
    addPost: (daPost) => axios.post(`/api/posts`, daPost),
    updatePost: (daPost, id) => axios.put(`/api/posts/${id}`, daPost),
};
