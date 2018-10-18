import axios from 'axios';
import { request } from 'https';



const UsersApi = {
        getUsers:() => axios.get('http://localhost:8000/api/users/').then(res => res.data),
        login:credentials => axios.post('http://localhost:8000/login' ,{credentials}),
        signup:credentials => axios.post('http://localhost:8000/api/users/signup/',{credentials}).then(res => res.data.user),
        logout:() => axios.post('http://localhost:8000/api/users/logout/').then(res => res.data.user),
}

export default UsersApi;
