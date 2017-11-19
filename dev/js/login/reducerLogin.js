export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
        case "set_user":
            return { loggedInUser: action.payload };
            break;
    }
    return state;
}
