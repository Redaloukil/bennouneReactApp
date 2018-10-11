import { USER_LOGGED_IN , USER_LOGGED_OUT , USER_SIGNED_IN } from '../types/User';
import UserApi from '../../api';
import setAuthHeader from '../utils/setAuthorisationHeader';

export const userLogIn = user => ({
    type : USER_LOGGED_IN , 
    user
})

export const userLogout = () => ({
    type : USER_LOGGED_OUT , 
})

export const userSignup = user => ({
    type : USER_SIGNED_IN , 
    user,
})

export const login = credentials => dispatch => 
            UserApi.login(credentials)
            .then(user => {
                localStorage.bennoune = user.token
                setAuthHeader(user.token)
                dispatch(userLogIn)
})

export const signup = credentials => dispatch => 
            UserApi.signup(credentials)
            .then(user => {
                localStorage.bennoune = user.token
                setAuthHeader(user.token)
                dispatch(userSignup)
})

export const logout = () => dispatch => {
    localStorage.removeItem("bennoune");
    setAuthHeader();
    dispatch(userLogout());
}
    
        
    
 



