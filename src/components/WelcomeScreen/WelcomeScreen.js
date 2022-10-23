import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const WelcomeScreen = ({isLoggedIn, loginPending}) => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn === true && loginPending === false){
          navigate('/main')
        }
        else if(isLoggedIn === false && loginPending === false){
            navigate('/login')
        }
      },[isLoggedIn, loginPending, navigate])


  return (
    null
  )
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn,
        loginPending: state.socialFun.loginPending
    }
  }
export default connect(mapStateToProps)(WelcomeScreen)