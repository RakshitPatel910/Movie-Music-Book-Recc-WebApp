
const authReducer = ( watchCount = [], action ) => {
    switch (action.type) {
        case "CREATE":
            localStorage.setItem('watchCount', JSON.stringify( action?.payload ));
            return [ ...watchCount, action.payload ];
            // return [ ...watchCount, action?.payload ];
        case "LOGOUT":
            localStorage.clear();
            return { ...watchCount, watchCount: null };
        default:
            return watchCount;
    }
}

export default authReducer;