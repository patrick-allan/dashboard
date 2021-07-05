import Api from './api'

const UsersService = {
    login: async (params) => {
        const response = await Api.post('/login', params)
        console.log(response.data)
        /* localStorage.setItem('token', response.data) */
    },
    logout: () => {
        localStorage.removeItem('token', null)
    }
}

export default UsersService;