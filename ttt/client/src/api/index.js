import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getUserByUsername = username => api.get(`user/${username}`)


const apis = {
	insertUser,
	getUserByUsername,
}

export default apis