import React, { useState, useTransition } from 'react'
import "./ImageApp.css"
import pic from "../images/nature.jpg"
const ImageApp = () => {
    const[height,setheight]= useState(200)
    const[width,setwidth]= useState(200)
    const[rotate,setrotate]= useState(0)
  return (
    <>
    <div id='image'><img src={pic} id='image' alt="" height={height} width={width} style={{transform:`rotate(${rotate}deg)`}}/></div>
    <div id='panel'>
    <button className='btn' onClick={()=>{setheight(height+10);}}>Increase Height</button>
    <button className='btn' onClick={()=>{setwidth(width+10);}}>Increase Width</button>
    <button className='btn' onClick={()=>{setheight(height-10);}}>Decrease Height</button>
    <button className='btn' onClick={()=>{setwidth(width-10);}}>Decrease Width</button>
    <button className='btn' onClick={() =>{setrotate(rotate+10);}}>Rotate Clockwise</button>
    <button className='btn' onClick={() =>{setrotate(rotate-10);}}>Rotate AntiClockwise</button>
    </div>
    </>
  )
}

export default ImageApp