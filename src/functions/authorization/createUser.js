import axios from "axios";
import store from "redux/store";
import { setErrorCode } from "redux/reducers";
import emailValidator from "./emailValidator";
import passwordValidator from "./passwordValidator";


const handler = (res) =>{
    console.log(res.status);
    console.log(res)
}
const createUser = async (email, password, repeatedPassword) => {
    console.log(email, password, repeatedPassword)
    if(emailValidator(email) && passwordValidator(password, repeatedPassword)){
        const createUserHandler = await axios.post('https://socialback.bieda.it/register', {email, email, password}).then((res)=> handler(res));
        return createUserHandler
    }
    else{
        if(!emailValidator){
            store.dispatch(setErrorCode('Wrong email adress'))
        }
        else{
            store.dispatch(setErrorCode('Password does not match'))
        }
    }
}
export default createUser