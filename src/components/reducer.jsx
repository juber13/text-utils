const btnReducer = (state, action) => {
    switch (action.type) {
        case  "UPDATE_STATE":
            return state = action.payload;

        case "CONVERT_UPPERCASE":
            return state.toUpperCase();

        case "CONVERT_LOWERCASE":
            return state.toLowerCase();

        case "CLEAR_TEXT":
            return "";

        case "REMOVE_EXTRA_SPACE":
            return state.replace(/\s+/g, " ");

            default:
                return state;
    }
}


export default btnReducer;