import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn, setLoggedUserEmail, setErrorCode } from '../../redux/reducers';

//let password = 'dupa1234';
//let email ='sl.tuszko@gmail.com';

const setLoginData = (loginData) =>{
    store.dispatch(toggleUserIsLoggedIn(true));
    store.dispatch(setLoggedUserEmail(loginData.data._tokenResponse.email))
    return true
}
const invalidLoginData = () =>{
    return false
}

const loginUser = async (password, email) => {
    const getImage = await axios.post('http://localhost:9000/loginuser', {password, email}).then((res)=>
    {
        //store.dispatch(setErrorCode(res.data.slice(5).replace('-', ' ')))
        res.data === 'auth/user-not-found' || res.data === 'auth/wrong-password' || res.data === 'auth/invalid-email' ? invalidLoginData() : setLoginData(res)

    }
    );
    return getImage
}

export default loginUser