import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import { createContext,useState,useEffect } from "react";
import axios from 'axios';
import { Checkout } from './pages/Checkout';


export const CartContxt=createContext('hello');


function App() {
  const [data,setdata] = useState('hello');
  const getData= ()=>{
       axios.get(`http://localhost:3001/Feeds.json`)
        .then(res =>{
          setdata(res.data)
          // console.log(res.data)
        })
    }
    useEffect(() => {
      getData()
    }, [])




  return (
    
    <CartContxt.Provider value={{data,setdata}}>
       <div className="App">
     <Router>
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/checkout' element=<Checkout/> />
      </Routes>
     </Router>

      
    </div>
    </CartContxt.Provider>
    
  );
}

export default App;
