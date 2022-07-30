import React, { useEffect } from 'react'
import Cats from '../cats/cats'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn'

const ProtectedRoute = ({isLoggedIn}) => {
    useEffect(()=>{
        isUserLoggenIn()
    },[])

    console.log('protected route', isLoggedIn)
    return (isLoggedIn === true ? <Cats /> : <Navigate to='/' />)
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn,
    }
  }

export default connect(mapStateToProps)(ProtectedRoute)