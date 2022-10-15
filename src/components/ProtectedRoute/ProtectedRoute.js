import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import isUserLoggenIn from '../../functions/auth/isUserLoggenIn'
import MainWrapper from '../MainWrapper/MainWrapper'

const ProtectedRoute = ({isLoggedIn}) => {
    useEffect(()=>{
        isUserLoggenIn()
    },[])

    console.log('protected route', isLoggedIn)
    return (isLoggedIn === true ? <MainWrapper /> : <Navigate to='/' />)
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn,
    }
  }

export default connect(mapStateToProps)(ProtectedRoute)