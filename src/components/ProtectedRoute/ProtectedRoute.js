import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import MainWrapper from 'components/MainWrapper/MainWrapper'

const ProtectedRoute = ({isLoggedIn}) => {
    return (isLoggedIn === true ? <MainWrapper /> : <Navigate to='/' />)
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn
    }
  }

export default connect(mapStateToProps)(ProtectedRoute)