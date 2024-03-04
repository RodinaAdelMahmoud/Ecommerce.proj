import React, { useContext, useState } from 'react'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { cartContext } from '../../Context/cartContext';
import  toast  from "react-hot-toast";

// import { toast } from 'react-toastify';

export default function Products() {


  
  let {addToCart,setNumOfCartItems}=useContext(cartContext)

function getProducts(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}
let {isLoading,data}=useQuery('Product',getProducts,{
  cacheTime:3000,
  refetchInterval:5000
})
async function addProductToCart(id){
  let {data} = await addToCart(id)
  if(data.status === 'success'){
    toast.success(data.message,{duration:4000, position:'top-center'});
    setNumOfCartItems(data.numOfCartItems)

    
    
  }
  else{
    toast.error('error adding product');
  }
  }


  const [likedProducts, setLikedProducts] = useState([]);
  let userToken = localStorage.getItem('userToken');
  let headers = {
    token: userToken
  };
  
  function addToFav(id) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      productId: id
    }, { headers });
  }

  async function addProductTofav(id) {
    let { data } = await addToFav(id);
    if (data.status === 'success') {
      toast.success(data.message, { duration: 4000, position: 'top-right' });
    } else {
      toast.error('Error adding product');
    }
  }
  const toggleLike = async (productId) => {
    try {
      if (likedProducts.includes(productId)) {
        await removeFromWishlist(productId);
        setLikedProducts(likedProducts.filter((id) => id !== productId));
      } else {
        await addToWishlist(productId);
        setLikedProducts([...likedProducts, productId]);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };
  const addToWishlist = async (productId) => {
    try {
      let response = await addToFav(productId);
      if (response.status === 200) {
        toast.success('Product added to your Wishlist', { duration: 4000, position: 'top-right' });
      } else {
        toast.error('Error adding to wishlist');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('Error adding to wishlist');
    }
  };
  const removeFromWishlist = async (productId) => {
    try {

      let response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, { headers });
      if (response.status === 200) {
        toast.success(response.data.message, { duration: 4000, position: 'top-right' });
      } else {
        toast.error('Error removing from wishlist');
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast.error('Error removing from wishlist');
    }
  };

  
  return <>
  {isLoading? <div className='w-100 py-5 d-flex justify-content-center'>
  <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div>: <div className='container py-2'>
    <h2>Products</h2>
    <div className='row'>
    {data?.data.data.map((product)=>{
                    const isLiked = likedProducts.includes(product.id);

       return <div className="col-md-3" key={product.id}>
          <div className="product p-5">
          <Link  to={`/productdetails/${product.id}`}>
          <img src={product.imageCover} className='w-100' alt={product.title}/>
           <p className='text-main'>{product.category.name}</p>
           <h6>{product.title}</h6>
           <div className='d-flex justify-content-between'>
            <p>{product.price} EGp</p>
            <p>{product.ratingsAverage}<i className='fa-solid fa-star rating-color'></i></p>

           </div>
          </Link>

          <i
                      onClick={() => toggleLike(product.id)}
                      className={`fa-solid fa-heart h3 float-end cursor-pointer heart ${isLiked ? 'text-danger' : ''}`}
                    ></i>
           <button onClick={()=>{addProductToCart(product.id)}} className='btn bg-main text-light w-100'>Add to cart</button>
           
          </div>
       </div>
      })
      }

    </div>
    </div>}
  </>
}
