import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Icar } from '../../types'
import React, { useEffect, useState } from 'react';

// interface CarProps {
//     cars:Icar
// }
// interface CarProps1 {
//     id:number,
//     brand:string,
// }

// const Home=({cars}:CarProps) =>{

//   const del = async (deleteid:number) =>{
//         const response = await fetch('http://localhost:8000/car/'+deleteid,{method:'DELETE'})
//         const cars = await response.json()
//         Router.push("/cars");
//   }
  
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         </Head>
//       <h1>Cars List:-</h1>

//       <ul>
//         {cars? cars.map((car:CarProps1) =>
//           <li><Link href={{pathname: `/cars/${car.id}`}}>{car.brand}</Link><button onClick={()=>del(car.id)}>Delete</button></li>
//       ) : "No Cars to display"}
//       </ul>
    
//     </div>
//   )
// }
// export default Home

// export async function getStaticProps() {

//   const res = await fetch('http://localhost:8000/car')
//   const cars = await res.json()
//   return {
//     props: {
//       cars,
//     },
//   }
// }
  interface CarProps {
      id:number,
      brand:string,
  }

export default function Home() {

  const [cars,setcars] = useState([])

  useEffect(()=>{
      fetch('http://localhost:8000/car')
      .then(res=>res.json())
      .then((result)=>{
        setcars(result);
      })
  },[])

  const del = async (deleteid:number) =>{
        const response = await fetch('http://localhost:8000/car/'+deleteid,{method:'DELETE'})
        const cars = await response.json()
        setcars(cars);
  }
  
  return (
    <div>
      <Head>
        <title>Home</title>
        </Head>
      <h1>Cars List:-</h1>

      <ul>
        {cars? cars.map((car:CarProps) =>
          <li><Link href={{pathname: `/cars/${car.id}`}}>{car.brand}</Link><button onClick={()=>del(car.id)}>Delete</button></li>
          
      ) : "No Cars to display"}
       
      </ul>
    
    </div>
  )
}

