import axios from 'axios';

export default UsersApi = {
        login: creadentials => axios.post('/login' , creadentials ),
        signup : creadentials => axios.post('/signup', creadentials ),

}


