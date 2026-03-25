import { useSelector,useDispatch } from "react-redux";


const useAuth = () => {
    const {user , token , isAuthenticated} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const saveCredentials = (data) => {
        dispatch(setCredentials(data));
    }
    const signOut = () => {
        dispatch(logout());
    }

    const isAdmin = user?.role === "ROLE_ADMIN" || user?.role === "ADMIN";

    return {user, token, isAuthenticated, isAdmin, saveCredentials, signOut};
}

export default useAuth;