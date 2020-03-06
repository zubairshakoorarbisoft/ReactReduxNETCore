export default (state = false, action) => {
    debugger
    switch (action.type) {
        case "FETCH_Is_LOGGED_IN":
            return action.payload;
        default:
            return state;
    }
};
