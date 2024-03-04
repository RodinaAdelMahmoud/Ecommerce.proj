import axios from "axios";
import React, {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/cartContext";
import { toast } from "react-toastify";
export default function Details() {
  let {addToCart,setNumOfCartItems}=useContext(cartContext)

  const [productDetails, setDetails] = useState(null);
  let params = useParams();
  let productId = params.id;

  async function getProduct() {
    let { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/products/${productId}`
    );
    console.log(data.data);
    setDetails(data.data);
  }

  async function addProductToCart(id){
    let {data} = await addToCart(id)
    if(data.status === 'success'){
      toast.success(data.message,{duration:4000, position:'top-left'});
      setNumOfCartItems(data.numOfCartItems)

      
    }
    else{
      toast.error('error adding product');
    }
    }
    

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
          <img src={productDetails?.imageCover} className="w-100" alt="cover" />
        </div>
        <div className="col-md-9 d-flex flex-column justify-content-around">
          <div>
            <h2>{productDetails?.title}</h2>
            <p>{productDetails?.description}</p>
          </div>
          <div>
              <p>{productDetails?.category.name}</p>
              <div className="d-flex justify-content-between">
              <p><span className="text-main">Price</span>{productDetails?.price}</p>
              <p><span>{productDetails?.ratingsAverage}</span><i className="fa-solid rating-color fa-star"></i></p>
              </div>
              <button onClick={()=> {addProductToCart(productDetails.id)}} className="btn bg-main text-light w-100">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
