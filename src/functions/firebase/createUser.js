import axios from 'axios';

//let userName = `${Date.now()}ahmned`;
//let email = userName+'@gmail.com';
let password = 'dupa1234';
let email = password+'@gmail.com';

const createUser = async () => {
    const getImage = await axios.post('http://localhost:9000/createuser', {password, email}).then((res)=> console.log(res.data));
    return getImage
}

export default createUser