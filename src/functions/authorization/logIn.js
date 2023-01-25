import axios from "axios";
import store from "redux/store";
import { setErrorCode, toggleUserIsLoggedIn, setLoggedUserDetails } from "redux/reducers";

const logIn = async (email, password) => {
    const handler = (res) =>{
        console.log(res.data.status);
        if(res.data.status === 'failure'){
            store.dispatch(setErrorCode(res.data.info.message))
        }
        else if (res.data.status === 'success'){
            console.log('successfully logged in')
            localStorage.setItem('jwt',res.data.token)
            store.dispatch(setLoggedUserDetails(res.data.info.message.email))
            store.dispatch(toggleUserIsLoggedIn(true))
        }
    }
    try{
        await axios.post('https://socialback.bieda.it/login', {email, password}, {withCredentials: true}).then((res)=> handler(res) );

    } catch(e) {
        console.log(e)
    }
}
export default logIn