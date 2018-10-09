import axios from 'axios';
import { request } from 'https';



const UsersApi = {
        getUsers:() => axios.get('http://localhost:8000/api/users/').then(res => res.data),
        login: user => axios.post('http://localhost:8000/api/users/login/' ,{user}).then(res => res.data.user),
        psignup: user => axios.post('http://localhost:8000/api/users/signup/',{user}).then(res => res.data.user),
}

export default UsersApi;
