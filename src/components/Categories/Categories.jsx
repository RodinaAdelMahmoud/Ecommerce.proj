import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'



export default function Categories() {
  function getCategories(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
  let { data}=useQuery('categories',getCategories);


  return <>
  <div className='container mt-5'>
    <div className="row">

  {data?.data.data.map((product)=>{
       return <>  <div className="col-md-4" key={product._id}>
       
       <div className="card mb-3 product-hover " >
   <img src={product.image} className="card-img-top" alt="..." height={300}  />
   <div className="card-body">
   <p className='text-center h3 text-success'>{product.name}</p>

   </div>
 
 </div>
       </div>
       </>
      
      })
      }
  </div>    </div>

 
  </>
}
