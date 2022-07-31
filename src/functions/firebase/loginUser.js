import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn, setLoggedUserEmail } from '../../redux/reducers';

let password = 'dupa1234';
let email ='sl.tuszko@gmail.com';

const setLoginData = (loginData) =>{
    store.dispatch(toggleUserIsLoggedIn(true));
    store.dispatch(setLoggedUserEmail(loginData.data._tokenResponse.email))
}

const loginUser = async () => {
    const getImage = await axios.post('http://localhost:9000/loginuser', {password, email}).then((res)=>
    {
        res.data === 'auth/user-not-found' || res.data === 'auth/wrong-password' ? console.log(res.data) : setLoginData(res)

    }
    );
    return getImage
}

export default loginUser