import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn } from '../../redux/reducers';


const isUserLoggenIn = async () => {
    const isLoggenIn = await axios.get('http://localhost:9000/persistence').then((res)=> {
        return res.data.email === false ? false : (store.dispatch(toggleUserIsLoggedIn(true)))
        }
        );
  return (
    null
  )
}

export default isUserLoggenIn