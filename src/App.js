import React, {useEffect} from 'react';
import Cats from './components/cats/cats';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginScreen />} />
        <Route exact path='/main' element={<ProtectedRoute />} />
        <Route path='*' element={<h1>ERROR 404</h1>} />
      </Routes>
    </Router>
  )
}


export default App
//<Route path='/main' element={(
//  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//  <Cats />
//</div>
//)} />