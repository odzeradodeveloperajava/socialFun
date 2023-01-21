import axios from "axios";
import store from "redux/store";
import { setErrorCode } from "redux/reducers";
import emailValidator from "./emailValidator";


const handler = (res) =>{
    console.log(res.status);
    console.log(res)
}

const createUser = async (email, password) => {
    if(emailValidator(email)){
        const createUserHandler = await axios.post('https://socialback.bieda.it/register', {email, email, password}).then((res)=> handler(res));
        return createUserHandler
    }
    else{
        store.dispatch(setErrorCode('Wrong email adress'))
    }

    
}
export default createUser