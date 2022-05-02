import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "62661ea3ca6312a732c2da0d",
        username: "jane",
        email: "jane@gmail.com",
        password: "$2b$10$Yt9HZk4T7TZ9DRnnvMxFa.F2iui50qAQhhCRYxo1W9MurvKSMXfLG",
        profilePicture: "/profile/photo1.jpg",
        followers: [],
        coverPicture: "",
        isAdmin: false,
        followings: [],
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};