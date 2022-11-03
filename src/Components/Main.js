import React from 'react'
import  "./Main.css"
import {GoSearch} from "react-icons/go";
 
export default function Main() {
  return (
    <div id='main'>
    <div className='box'>
          <h3>Book A Ride</h3>
      <input className='c' type="text"  placeholder="Enter your location"/>
     <button className='b'><GoSearch /></button><br />
     <p><button className='btun'>Select Pickup</button> </p>
         </div>
      
    </div>
  )
}
