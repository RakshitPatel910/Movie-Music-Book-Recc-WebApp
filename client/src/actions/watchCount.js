import * as api from '../api/backend.js';

export const createWatchCount = ( userId ) => async ( dispatch ) => {
    try {
        const { watchCountData } = await api.createWatchCount( userId );

        dispatch({type: "CREATE", payload: watchCountData })
    } catch (error) {
        console.log(error)
    }
}