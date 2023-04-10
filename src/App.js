import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import  SalesPage  from './pages/SalesPage';
import InventoryPage from './pages/InventoryPage.js';
import { AuthProvider } from './features/auth/Auth'
import  PrivateRoute from './features/auth/PrivateRoute'


function App() {

  return (
    <Router >
      <AuthProvider>
      <Routes>
      <Route path='/access' element={ <LoginPage/> } />
      <Route path='/' element={ 
      <PrivateRoute>
        <HomePage /> 
      </PrivateRoute>
      }>
        <Route path='sales' element={ <SalesPage/> }/>
        <Route path='inventory' element={ <InventoryPage/> }/>
      </Route>
      </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
