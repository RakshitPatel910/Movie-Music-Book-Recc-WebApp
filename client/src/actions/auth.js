import * as api from '../api/backend.js';

export const signin = ( profile, navigate ) => async (dispatch) => {
    try {
        const { data } = await api.signIn( profile.email, profile.password );
        
        dispatch({ type: "AUTH", data });
        
        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}