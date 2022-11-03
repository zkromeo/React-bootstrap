import React from 'react'
import "./Photo.css"
import pic1 from '../images/4.jpg'
import pic2 from '../images/8.jpg'
import pic3 from '../images/2.jpg'
import pic4 from '../images/1.jpg'
import pic5 from '../images/9.jpg'
import pic6 from '../images/3.jpg'

export default function Photo() {
  return (
    
      <div className="container">
   <div className="row mt-3 ">
    <div className="col-4"><img className='image' src={pic1} alt=''/></div>
    <div className="col-4 "><img className='image' src={pic2} alt=''/></div>
    <div className="col-4"><img className='image' src={pic3} alt=''/></div>
    <div className="w-100 mt-2"></div>
    <div className="col-4"><img className='image' src={pic4} alt=''/></div>
    <div className="col-4"><img  className='image'src={pic5} alt=''/></div>
    <div className="col-4"><img className='image' src={pic6} alt=''/></div> <br></br>
   <div className='z'><h2>Travel With Safar Cab</h2></div>  
     
  
 {/* <div className='row'> 
  <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2"><img className='d' src={pic1} alt=''/></div>
    <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2 "><img className='e' src={pic2} alt=''/></div>
    <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2"><img className='f' src={pic3} alt=''/></div>
  </div>
  <div className='row'> 
  <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2"><img className='d' src={pic1} alt=''/></div>
    <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2 "><img className='e' src={pic2} alt=''/></div>
    <div className="col-4 col-md-4 col-sm-4 col-xs-4 p-2"><img className='f' src={pic3} alt=''/></div>
</div>*/}
</div>
    </div>
  )
}
