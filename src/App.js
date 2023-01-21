import jwtHandler from 'functions/authorization/jwtHandler';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

const App = () => {

  jwtHandler(localStorage.getItem('jwt'))

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<WelcomeScreen />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/main' element={<ProtectedRoute />} />
        <Route path='*' element={<h1>ERROR 404</h1>} />
      </Routes>
    </Router>
  )
}

export default App