import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn, setLoggedUserDetails, setErrorCode } from '../../redux/reducers';

//let password = 'dupa1234';
//let email ='sl.tuszko@gmail.com';

const setLoginData = (loginData) =>{
    store.dispatch(toggleUserIsLoggedIn(true));
    store.dispatch(setLoggedUserDetails(loginData.data._tokenResponse.email))
}
const invalidLoginData = (res) =>{
    store.dispatch(setErrorCode(res.data.slice(5).replace('-', ' ')))
}

const loginUser = async (password, email) => {
    if(password.length === 0 || email.length === 0){
        store.dispatch(setErrorCode('fields cannot be empty'))
    }
    else{
    const getImage = await axios.post('http://[2a01:4f9:2b:289c::475]:80/loginuser', {password, email}).then((res)=>
    {
        res.data === 'auth/user-not-found' || res.data === 'auth/wrong-password' || res.data === 'auth/invalid-email' ? invalidLoginData(res) : setLoginData(res)
    }
    );
    return getImage
}
}

export default loginUser