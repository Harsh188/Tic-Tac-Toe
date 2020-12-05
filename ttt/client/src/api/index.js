import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getUserByUsername = username => api.get(`/user/${username}`)
export const getAllUsers = () => api.get(`/users`)
export const updateUserByUsername = (username, payload) => api.put(`/user/${username}`,payload)

const apis = {
	insertUser,
	getUserByUsername,
	getAllUsers,
	updateUserByUsername
}

export default apis