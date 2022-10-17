import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
import Header from './components/Header/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Aboutus from './components/Aboutus';
import Root from './components/Root/Root';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Products from './components/Product/Products';
import Orders from './components/Orders';
import ProductsLoaders from './components/Loaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Root/>,
      children:[
        {path:'/', element:<Home/>},
        {path:'/pricing', element:<Pricing/>},
        {path:'/orders', element:<Orders/>},
        {path:'/shop', element:<Shop/>,
        loader:ProductsLoaders,},
        {path:'/features', element:<Features/>},
        {path:'/about', element:<Aboutus/>},
        {path:'/signin', element:<SignIn/>},
        {path:'/signup', element:<SignUp/>},
        {path:'/products', element:<Products/>,
        loader:ProductsLoaders,},
      ],
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
