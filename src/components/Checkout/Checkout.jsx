import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'

export default function Checkout() {
    let {onlinePayment}=useContext(cartContext)
   async function payment(value){
        let {data}= await onlinePayment(value);
        window.location.href=data.session.url;
    }
    let formik = useFormik({
        initialValues:{
            "details":"",
            "phone":"",
            "city":""
        },
        onSubmit:payment
    })
  return (
<>
<div className="container">
   <div className="mx-auto bg-main-light p-5">
<h2>    Shipping Address
</h2>
<form onSubmit={formik.handleSubmit}>
    <div className="form-group mb-3">
        <label htmlFor="details">Details</label>
        <input type="text" className='form-control' id='details' name='details' value={formik.values.details} onChange={formik.handleChange} />
    </div>
    <div className="form-group mb-3">
        <label htmlFor="phone">Phone</label>
        <input type="tel" className='form-control' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
    </div>
    <div className="form-group mb-3">
        <label htmlFor="city">City</label>
        <input type="text" className='form-control' id='city' name='city' value={formik.values.city} onChange={formik.handleChange} />
    </div>
    <button className='btn bg-main w-100'>Pay now</button>
</form>

   </div>
</div>
</>
    )
}
