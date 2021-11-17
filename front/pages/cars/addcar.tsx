import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icar } from '../../types'
import React, { useEffect, useState } from 'react';
import { carAddApi } from '../../services/carService';


export default function AddCar() {
    const [id,setId]= useState("");
    const [brand,setBrand]= useState("");
    const [color,setColor]= useState("");
    const [model,setModel]= useState("");
   
    const handleSubmit = () =>{
                const data = {id,brand,color,model}
                 carAddApi(data,(res:any)=>{           // api call to add new car
                      console.log("added")
                 })
    }
    
    return (
      <div>
        <Head>
          <title>AddCar</title>
          </Head>
        <h1>New Car :-</h1>

        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Car Id:</label>
                    <input type="number"  name="id"  onChange={(e)=>setId(e.target.value)} id="id"/>
                </div>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text"  name="brand"  onChange={(e)=>setBrand(e.target.value)} id="brand"/>
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text"  name="color"  onChange={(e)=>setColor(e.target.value)} id="color"/>
                </div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input type="text"  name="model"  onChange={(e)=>setModel(e.target.value)} id="model"/>
                </div>
                <button type="submit">Add</button>
            </form>
            <br/>
        <Link href="/cars">see all cars</Link>
       
      </div>
    )
  }