import React from 'react';
import { connect } from 'react-redux';
import Cats from './components/cats/cats';

const App = ({dupa}) => {
  return (
    <Cats />
  )
}

const mapStateToProps = state => {
  return {
      dupa: state.socialFun.testValue
  }
}

export default connect(mapStateToProps)(App)