import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//Layouts
import BaseLayout from './layouts/BaseLayout';
//Base pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<BaseLayout />} >
        <Route index element={<Home />}/>
      </Route>
      <Route path='/checkout' element={<Checkout />}/>
    </>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;