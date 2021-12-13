const axios = window.axios;

export default {
    getAllProjects: () => {
        return axios.get("/api/projects");
    },
    getSinglePost: (id) => axios.get(`/api/posts/${id}`),
    addProject: (theProject) => axios.post(`/api/projects`, theProject),
    updatePost: (daPost, id) => axios.put(`/api/posts/${id}`, daPost),
    registerUser: (user) => axios.post("/api/register", user),
    loginUser: (user) => axios.post("/api/login", user),
    loginOutUser: () => axios.post("/api/logout"),
    getLoggedInUser: () => axios.post("/api/getuser"),
};
