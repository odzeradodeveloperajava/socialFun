import axios from 'axios';

const firebaseLogOut = async () => {
    const isLoggenIn = await axios.get('http://[2a01:4f9:2b:289c::475]:80/logout').then((res)=> {
        console.log(res.data)        }
        );
  return (
    isLoggenIn
  )
}

export default firebaseLogOut