import  SalesPage  from './pages/SalesPage';
import InventoryPage from './pages/InventoryPage.js';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<HomePage />}>
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
