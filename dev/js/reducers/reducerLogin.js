export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
        case "set_user":
            return action.payload;
            break;
        case "logout_user":
            return null;
    }
    return state;
}
