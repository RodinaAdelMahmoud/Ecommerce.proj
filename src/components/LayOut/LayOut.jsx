import React, { useContext, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { userContext } from '../../Context/UserContext'
import { Offline  } from 'react-detect-offline'
import { Toaster } from 'react-hot-toast'
export default function LayOut() {
  let {setToken} = useContext(userContext);
  useEffect(()=>{
if(localStorage.getItem('userToken') !==null){
  setToken(localStorage.getItem('userToken'))
}
  },[]);
  return <>
  <NavBar/>
  <Outlet></Outlet>
  <Toaster/>
  <Footer/>
  <Offline>
    <div className="network">
      <i className='fas fa-wifi'> You are Offline</i>
    </div>
  </Offline>
  </>
}
