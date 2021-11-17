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
import { carDeleteApi, carInfoApi } from '../../services/carService'

interface CarProps {        // Interface
  id: number,
  brand: string,
}

export default function Home() {
  const [cars,setCars] = useState([])     //cars array

  useEffect(()=>{
    carInfoApi((data:any)=>{         // api call to get cars list
      setCars(data)
      })
  },[])

  const handleDelete = async (deleteid:number) =>{           // api call to delete car
        carDeleteApi(deleteid,(data:any)=>{
          setCars(data)
        })
  }
  
  return (
    <div>
      <Head>
        <title>Home</title>
        </Head>
        <button><Link href="/cars/addcar">Add new Car</Link></button>
      <h1>Cars List:-</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Brand</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
        {cars? cars.map((car:CarProps) =>
        <tr>
          <td>{car.id}</td>
          <td>
            <Link href={{pathname: `/cars/${car.id}`}}><a>{car.brand}</a></Link>
            </td>
            <td>
            <button onClick={()=>handleDelete(car.id)}>Delete</button>
            </td>
          </tr>
          
      ) : "No Cars to display"}
      </tbody>
      </table>
    
    </div>
  )
}

