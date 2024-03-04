import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext'
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
export default function Cart() {
const[cartDetails ,setCartDetails]=useState(null);
let {deleteCart,updateCart,getCart,setNumOfCartItems}=useContext(cartContext);

async function getCartt(){
let {data} =await getCart();
setNumOfCartItems(data.numOfCartItems)
setCartDetails(data);
}
useEffect(()=>{
getCartt();
},[]);


async function removeProcduct(id){
let {data} =await deleteCart(id)
setNumOfCartItems(data.numOfCartItems)

setCartDetails(data);

}

async function updateProcduct(id,count){
if(count === 0){
deleteCart(id)
}else{
  let {data} =await updateCart(id,count)

  setCartDetails(data);

}
}

  return <>
  {cartDetails? <div className='w-75 mx-auto  mt-5'> 
    <h2 className='mb-3'>Shopping Cart</h2>
    <h4 className='h6 text-main fw-bolder'>cart items : <span className='text-main'>{cartDetails.numOfCartItems} </span></h4>
    <h4 className='h6 text-main fw-bolder mb-3'>total cart price : <span className='text-main'>{cartDetails.data.totalCartPrice} EGP</span></h4>
    {cartDetails.data.products.map((product)=> <div className="row border-bottom py-5" key={product._id}>
          <div className="col-md-2">
          <img src={product.product.imageCover} className='w-100' alt="cover"/>
          </div>
          <div className="col-md-10 d-flex justify-content-between align-items-center">
            <div>
            <h5>{product.product.title}</h5>
            <p>{product.price}</p>
            <button onClick={()=>{removeProcduct(product.product._id)}} className='btn btn-outline-danger'><i className='fa-regular fa-trash-can'></i>Remove</button>
            </div>
            <div>
            <button onClick={()=>{updateProcduct(product.product._id,product.count+1)}} className='btn btn-outline-success'>+</button>
            <span className='mx-2'>{product.count}</span>
            <button onClick={()=>{updateProcduct(product.product._id,product.count-1)}} className='btn btn-outline-success'>-</button>
            </div>
          </div>
          </div>)
          }    <Link className='btn btn-success w-100 text-white' to={'/checkout'}> Checkout</Link>


    
    
    
     </div> :<section id='loading' className='d-flex justify-content-center align-items-center'><BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /> 
  </section> }
   
  </>}