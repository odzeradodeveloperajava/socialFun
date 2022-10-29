import axios from 'axios';
import store from 'redux/store';
import { toggleUserIsLoggedIn, setLoggedUserDetails, togglePending } from 'redux/reducers';
store.dispatch(togglePending(true))

const setLoggedData = (email) =>{
  store.dispatch(toggleUserIsLoggedIn(true))
  store.dispatch(setLoggedUserDetails(email))
  store.dispatch(togglePending(false))
}

const isUserLoggenIn = async () => {
    const isLoggenIn = await axios.get('https://socialback.bieda.it/persistence').then((res)=> {
        console.log(res.data)
        return res.data.email === false ? store.dispatch(togglePending(false)) : (
          setLoggedData(res.data.email)
          )
        }
        );
  return (
    isLoggenIn
  )
}

export default isUserLoggenIn