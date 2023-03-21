import React from "react";
import { useState,useContext } from "react";
import { CartContxt } from '../App'



export const Card = ({ name, price, image}) => {
  const [mycart, setmycart] = useState([{}])


  const con = useContext(CartContxt)
  
  
  const addcart=()=>{
    const newState = con.data.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.name === name) {
          return {...obj, count: obj.count+1};
        }
  
        // 👇️ otherwise return the object as is
        return obj;
      });
  
      con.setdata(newState);
  }

  const removecart=()=>{
    const newState = con.data.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.name === name) {
          return {...obj, count: obj.count-1};
        }
  
        // 👇️ otherwise return the object as is
        return obj;
      });
  
      con.setdata(newState);
  }
//   console.log(con.data)
  return (
    <div className="card">
      <input type="hidden" name="image" value={image} />
      <input type="hidden" name="price" value={price} />
      <input type="hidden" name="name" value={name} />
      <img src={image} alt="" />
      <div className="cardbottom">
        <h3>{name}</h3>
        <h4>Price:{price}$</h4>
        <button className="plus" onClick={addcart}>+</button>
        <button className="minus" onClick={removecart}>-</button>
      </div>
    </div>
  );
};
