import { USER_LOGGED_IN , USER_LOGGED_OUT } from '../types/User';
import UserApi from '../../api';
import setAuthHeader from '../utils/setAuthorisationHeader';


export const userLogIn = user => ({
    type : USER_LOGGED_IN , 
    user
})

export const userLogout = () => ({
    type : USER_LOGGED_OUT , 
})



export const login = credentials => dispatch 
    => UserApi.login(credentials)
            .then(user => {
                localStorage.setItem({
                    'manakoulsh':user.token
                })
                setAuthHeader(user.token)
                dispatch(userLogIn)
})

export const signup = credentials => dispatch 
    => UserApi.login(credentials)
            .then(user => {
                localStorage.setItem({
                    'manakoulsh':user.token
                })
                setAuthHeader(user.token)
                dispatch(userSignUp)
})

 



