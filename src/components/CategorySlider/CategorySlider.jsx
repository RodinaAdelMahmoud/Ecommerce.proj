import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import { useQuery } from 'react-query';
export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true
  };
function getCategories(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
let {data}=useQuery('allCategory',getCategories);
console.log(data?.data.data);
return(
<>
<div className="container">

<div className="row">
   <h4>Shop Popular Categories</h4>
<Slider {...settings} >
{data?.data?.data.map((category)=> <div className='col-md-12'>  
<img alt='' src={category.image} height={250} className='w-100'/>
<h4>{category.name}</h4>
</div> )}
</Slider>
</div>
</div>
     
</>)
}

