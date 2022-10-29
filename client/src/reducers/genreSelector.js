
export default (genreList = [], action) => {
    switch (action.type) {
        case "RECC_GENRE_ARRAY":
            return action.payload;
    
        default:
            return genreList;
    }
}

// export default genreSelectorReducer;