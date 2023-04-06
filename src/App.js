import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import  SalesPage  from './pages/SalesPage';
import InventoryPage from './pages/InventoryPage.js';
import SignUpForm from './features/auth/SignUpForm';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<HomePage />}>
    <Route path='/login' element={ <LoginPage/>} />
    <Route path='/login' element={ <SignUpForm/>} />
      <Route path='sales' element={ <SalesPage/>}/>
      <Route path='inventory' element={ <InventoryPage/>}/>
      
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router}>
    
    </RouterProvider>
    </>
  );
}

export default App;
