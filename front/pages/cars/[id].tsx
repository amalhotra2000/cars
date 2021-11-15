import { captureRejections } from 'events'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { Icar } from '../../types'



// export const getStaticPaths = async ()=> {
//     const res = await fetch(`http://localhost:8000/car`)
//     const data = await res.json()

//     const paths = data.map((car: { id: { toString: () => any } })=>{
//         return{
//             params:{id:car.id.toString()}
//         }
//     })
  
//     return {
//       paths,
//       fallback:false
//     }
//   }

//   export const getStaticProps = async(context: { params: { id: number } })=>{
//     const id = context.params.id;
//     const res = await fetch('http://localhost:8000/car/'+id)
//     const data = await res.json();

//     return{
//         props:{carinfo:data}
//     }
// }

// const Detail = async({carinfo}:CarProps)=>{
//     return (
//         <div>
//           <h2>Brand = {carinfo.brand}</h2>
//           <h2>Color = {carinfo.color}</h2>
//           <h2>Model = {carinfo.model}</h2>

//           <Link href="/cars">see all cars</Link>
//         </div>
//       )
// }

// export default Detail

import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Detail(){
  const [carBrand,setcarBrand] = useState("");
  const [carColor,setcarColor] = useState("");
  const [carModel,setcarModel] = useState("");

  const {id} = useParams();
  
  useEffect(()=>{
    fetch(`http://localhost:8000/car/${id}`)
    .then(res=>res.json())
    .then((result)=>{
      setcarBrand(result.brand)
      setcarColor(result.color)
      setcarModel(result.model)
    })
},[])


return (
          <div>
            <h2>Brand = {carBrand}</h2>
            <h2>Color = {carColor}</h2>
            <h2>Model = {carModel}</h2>
  
            <Link href="/cars">see all cars</Link>
          </div>
        )

}