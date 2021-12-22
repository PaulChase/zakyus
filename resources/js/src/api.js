const axios = window.axios;

export default {
    getAllProjects: () => {
        return axios.get("/api/projects");
    },
    getUserTasks: (projectID) => axios.get(`/api/usertasks/${projectID}`),
    addTask: (task) => axios.post("/api/tasks", task),
    addProject: (theProject) => axios.post(`/api/projects`, theProject),
    changeTaskStatus: (taskDetails) =>
        axios.post("/api/changestatus", taskDetails),
    registerUser: (user) => axios.post("/api/register", user),
    loginUser: (user) => axios.post("/api/login", user),
    loginOutUser: () => axios.post("/api/logout"),
    getLoggedInUser: () => axios.get("/api/getuser"),
};
