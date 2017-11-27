export const setUserDetails = user => {
    return {
        type: "set_user",
        payload: user,
    };
};
export const userCredentials = user => {
    return {
        type: "login_user",
        payload: user,
    };
};
export const logoutUser = () => {
    return {
        type: "logout_user"
    };
};
