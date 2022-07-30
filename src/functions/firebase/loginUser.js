import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn, setLoggedUserEmail } from '../../redux/reducers';

let password = 'dupa1234';
let email ='dupa1234@gmail.com';

const setLoginData = (loginData) =>{
    store.dispatch(toggleUserIsLoggedIn(true));
    store.dispatch(setLoggedUserEmail(loginData.data._tokenResponse.email))
}

const loginUser = async () => {
    const getImage = await axios.post('http://localhost:9000/loginuser', {password, email}).then((res)=>
    {
        res.data === 'auth/user-not-found' || res.data === 'auth/wrong-password' ? console.log(res.data) : setLoginData(res)

    //console.log(res.data ,res.data._tokenResponse.idToken);
    //console.log('login user', res.data._tokenResponse.email)
    //localStorage.setItem('authToken', res.data._tokenResponse.idToken);


    }
    );
    return getImage
}

export default loginUser