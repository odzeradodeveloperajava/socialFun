import axios from 'axios';

const firebaseLogOut = async () => {
    const isLoggenIn = await axios.get('https://socialback.bieda.it/logout').then((res)=> {
        console.log(res.data)        }
        );
  return (
    isLoggenIn
  )
}

export default firebaseLogOut