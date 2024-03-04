import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext= createContext();
let userToken = localStorage.getItem('userToken');

let headers = {
    token:userToken
}

let BaseUrl =`https://route-ecommerce.onrender.com`;


function addToCart(id){
return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
    productId:id
}, {headers}).then((response) => response)
.catch((error)=>error)
}



function getCart(){
    return axios.get(`${BaseUrl}/api/v1/cart`,
    {
    headers
    }
    )
    }

    function updateCart(id,count){
        return axios.put(`${BaseUrl}/api/v1/cart/${id}`,
        {
            count:count
        },
        {
        headers
        }
        ).then((response)=>response).catch((error)=>error)
    }
    
    function deleteCart(id){
        return axios.delete(`${BaseUrl}/api/v1/cart/${id}`,
        {
        headers
        }
        ).then((response)=>response).catch((error)=>error)
    }

export default function CartContextProvider(props){
    const [cartNumber,setCartNumber] = useState(0)
    const [cartId,setCartId] = useState(null);
    const [numOfCartItems,setNumOfCartItems] = useState(null);



    function onlinePayment(shippingAddress){
    
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        {
            shippingAddress,    },
        {
        headers,
        }
        ).then((response)=>response).catch((error)=>error)
        
    }
    
async function getInitialCart(){
   let {data} =await getCart();
   setNumOfCartItems(data?.numOfCartItems)
   setCartId(data?.data._id)
}

useEffect(()=>{
    getInitialCart();
},[])


return  <cartContext.Provider  value={{numOfCartItems,setNumOfCartItems,addToCart,deleteCart,updateCart,cartNumber,setCartNumber,getCart,onlinePayment}}>
{props.children}
</cartContext.Provider>
}