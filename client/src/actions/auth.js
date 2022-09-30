import * as api from '../api/backend.js';

export const signin = ( profile, navigate ) => async (dispatch) => {
    try {
        const { data } = await api.signIn( profile.email, profile.password );
        
        dispatch({ type: "AUTH", data });
        
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT" });
    } catch (error) {
        console.log(error);
    }
}