import React from 'react'
import { useState ,useEffect,useContext,createContext} from 'react'
import { Card } from '../comps/Card'
import { Navbar } from '../comps/Navbar'
import axios from 'axios'
import {
  useNavigate
} from "react-router-dom";
import { CartContxt } from '../App'
// import { CartContxt } from '../comps/Contxt'










export const Home = () => {
  const [data,setdata]=useState()
  const [array, setarray] = useState()
  const [css,setcss] = useState('none')
  const navigate = useNavigate();
  
  const getData=()=>{
    axios.get(`http://localhost:3001/Feeds.json`)
      .then(res => {
        setdata(res.data)
        console.log(res.data)
      }).catch(err=>console.log(err))
  }

 

const mystyle={
  display:css
}

const co = useContext(CartContxt)
const contxt=co.data
  console.log(contxt)
  const addcart = () => {

    



  };
  const removecart = () => {};
  const thankyou=()=>{
    navigate("/checkout");
  } 


  useEffect(() => {
    getData()
    console.log(array)
  }, [])
  
  return (
    <div className='home'>


      <div className='cart' style={mystyle}>
      <div className="cartdiv">
            <h2>Order summery</h2>
            
            <div className='items'>
                <h3>Coke:</h3>
                <h3>3</h3>
                <span><button className='plus' onClick={addcart}>+</button>
        <button className='minus' onClick={removecart}>-</button></span>
            </div>
        <button className='plus' onClick={thankyou}>Save</button>
        <button className='minus' onClick={()=>setcss('none')}>cancle</button>
        </div>
        
    </div>


<Navbar css={css} setcss={setcss} />
<div className='content'>
  <div className="contentdiv">
  {data?data.map((item)=>{
    return(<Card name={item.name} price={item.price} image={item.image} addcart={addcart} removecart={removecart} />)
  }):'loding'}
  
  </div>
  


  
</div>

    </div>
  )
}
