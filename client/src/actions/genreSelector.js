import * as api from "../api/tmdb.js";

export const getMovies = (page, id, name) => async(dispatch) => {
    try {
        await api.fetchMovies( id);

        dispatch({type: "GENRE_CHANGE", payload: {name: name, id: id}})
    } catch (error) {
        console.log(error.message);
    }
}