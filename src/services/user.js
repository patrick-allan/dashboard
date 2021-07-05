import Api from './api'

const UsersService = {
    login: async (params) => {
        const response = await Api.post('/login', params)
        localStorage.setItem('token', response.data['token'])
        localStorage.setItem('userId', response.data['id'])
        localStorage.setItem('UserName', response.data['name'])
        localStorage.setItem('expire', response.data['1625518215'])
    },
    logout: () => {        
        localStorage.removeItem('token', null)
        localStorage.removeItem('userId', null)
        localStorage.removeItem('UserName', null)
        localStorage.removeItem('expires', null)
    }
}

export default UsersService;