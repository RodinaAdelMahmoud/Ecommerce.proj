import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function Brands() {

async function getBrands(){
return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}

let {data}=useQuery('brands',getBrands)

  return (<div className="container">   <div className='row'>
  <h1 className='text-main text-center my-5'>All Brands</h1>    <>
     {
      data?.data.data.map((brand)=>{
       return <div className="col-md-3" key={brand._id}>
       
       <div className="card mb-3 product-hover" >
   <img src={brand.image} className="card-img-top" alt="..." />
   <p className='text-center'>{brand.name}</p>
 
 </div>
       </div>
       })
     }  
     </>
     :
    
    
     </div></div>
 
  )
}
