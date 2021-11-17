import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { Icar } from '../../types'

// interface CarProps{
//   carinfo:Icar
// }

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
import {carDetailApi} from '../../services/carService'

interface CarId{
  carid:number
}

export default function Detail({carid}:CarId){
  
  const [carBrand,setCarBrand] = useState("");
  const [carColor,setCarColor] = useState("");
  const [carModel,setCarModel] = useState("");
  
  useEffect(()=>{
    carDetailApi(carid,(result:any)=>{        // api call to fetch details of a car 
      setCarBrand(result.brand)
      setCarColor(result.color)
      setCarModel(result.model)
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

  export const getStaticProps = async(context: { params: { id: number } })=>{  //passing only id of car as a props
    const id = context.params.id;
    return{
        props:{carid:id}
    }
}

export const getStaticPaths = async ()=> {
    const res = await fetch(`http://localhost:8000/car`)                   //api call to get cars ids
    const data = await res.json()
  
    const paths = data.map((car: { id: { toString: () => any } })=>{
        return{
            params:{id:car.id.toString()}
        }
    })
  
    return {
      paths,
      fallback:false
    }
  }

