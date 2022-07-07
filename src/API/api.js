import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
    withCredentials: true,
    headers: {
        "API-KEY": '05ec5518-172e-4b68-84a0-4112fb9da6fd',
    }
})

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}

export const followAPI = {
    postFollow (userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },
    deleteFollow (userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
}