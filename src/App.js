import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Brands from './components/Brands/Brands';
import ProductDetails from './components/ProductDetails/ProductDetails'
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import CartContextProvider from './Context/cartContext';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders'
let routers = createHashRouter([
  {path:'/', element: <LayOut/> , children:[
    {index:true, element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path: 'login', element:<Login/>},
    {path: 'Register', element:<Register/>},
    {path: 'Cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path: 'Products', element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path: 'Categories', element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path: 'Brands', element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path: 'allorders', element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path: 'checkout', element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path: 'forgotpassword', element:<ForgotPassword/>},
    {path: 'productdetails/:id', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path: '*', element:<Notfound/>},
  ]}
])
function App() {
 
  
  return <CartContextProvider>
    <UserContextProvider>
 <CounterContextProvider>
    
    <RouterProvider router={routers}></RouterProvider>
    
    </CounterContextProvider>
  </UserContextProvider>
  </CartContextProvider> 
 
}

export default App;
