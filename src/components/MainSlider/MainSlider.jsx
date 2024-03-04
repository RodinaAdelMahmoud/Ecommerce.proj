import React from 'react'
import Slider from 'react-slick';
import imdSlider1 from '../../assets/img/grocery-banner-2.jpeg';
import imdSlider2 from '../../assets/img/grocery-banner.png';
import imdSlider3 from '../../assets/img/slider-image-1.jpeg';
import imdSlider4 from '../../assets/img/slider-image-2.jpeg';
import imdSlider5 from '../../assets/img/slider-image-3.jpeg';
export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div class="row g-0  mb-5">
    <div className="col-md-8">
    <Slider {...settings}>
    <img src={imdSlider3} class="w-100" alt='imgSlider' height={500}/>
    <img src={imdSlider4} class="w-100" alt='imgSlider' height={500}/>
    <img src={imdSlider5} class="w-100" alt='imgSlider' height={500}/>
   </Slider>
    </div>
    <div className="col-md-4">
    <img src={imdSlider1} class="w-100" alt='imgSlider' height={250}/>
    <img src={imdSlider2} class="w-100" alt='imgSlider' height={250}/>
    </div>
    </div>
  )
}
