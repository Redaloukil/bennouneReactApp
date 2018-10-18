import axios from 'axios';
import { request } from 'https';



const UsersApi = {
        getUsers:() => axios.get('http://localhost:8000/api/users/').then(res => res.data),
        login:credentials => axios.post('http://localhost:8000/api/users/login/' ,{credentials}),
        signup:credentials => axios.post('http://localhost:8000/api/users/register/',{credentials}),
        logout:() => axios.post('http://localhost:8000/api/users/logout/').then(res => res.data.user),
}

export default UsersApi;
