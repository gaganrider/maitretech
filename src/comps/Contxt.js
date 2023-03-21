// import { createContext,useState,useEffect } from "react";
// import axios from "axios";
// export const CartContxt=createContext('hello');

// export const Contxt=({children})=>{
//     const [data,setdata] = useState('hello');
//     const getData=()=>{
//         axios.get(`http://localhost:3000/Feeds.json`)
//           .then(res => {
//             setdata(res.data)
//             console.log(res.data)
//           })
//       }
//       useEffect(() => {
//         getData()
//       }, [])
//     return(
//     <CartContxt.Provider value={data}>
//         {children}
//     </CartContxt.Provider>
//     )
// }