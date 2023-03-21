import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Navbar = ({css,setcss}) => {
const click=()=>{
    if(css=='none'){
        setcss('flex')
    }else{
        setcss('none')
    }
    // console.log('css')
}
  return (
    <div className='navbar'>
        <div className='navbar-left'><img src="https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/restaurant_48px.svg" alt="" />
        <h1>Food Restaurent</h1></div>
        
        <div className='navbar-rightt'>
            <span onClick={click} className="material-symbols-outlined">
shopping_cart
</span></div>
    </div>
  )
}
