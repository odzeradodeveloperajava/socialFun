import axios from 'axios';

//let userName = `${Date.now()}ahmned`;
//let email = userName+'@gmail.com';
let password = 'dupa1234';
let email = 'sl.tuszko@gmail.com';

const createUser = async () => {
    const getImage = await axios.post('http://[2a01:4f9:2b:289c::475]:80/createuser', {password, email}).then((res)=> console.log(res.data));
    return getImage
}

export default createUser