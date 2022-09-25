
export default (genreList = { name: null, id: null }, action) => {
    switch (action.type) {
        case "GENRE_CHANGE":
            return { ...genreList, name: action.payload.name, id: action.payload.id };
    
        default:
            return genreList;
    }
}

// export default genreSelectorReducer;