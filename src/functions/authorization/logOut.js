import store from "redux/store";
import {toggleUserIsLoggedIn, setLoggedUserDetails } from "redux/reducers";

const logOut = () =>{
    localStorage.removeItem('jwt')
    store.dispatch(toggleUserIsLoggedIn(false));
    store.dispatch(setLoggedUserDetails(''));
}

export default logOut