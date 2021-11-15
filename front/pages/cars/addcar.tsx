import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Icar } from '../../types'
import React, { useEffect, useState } from 'react';

export default function AddCar() {
    const [id,setid]= useState("");
    const [brand,setbrand]= useState("");
    const [color,setcolor]= useState("");
    const [model,setmodel]= useState("");
   
    const handleSubmit = () =>{
                const url = "http://localhost:8000/car"
                const data = {id,brand,color,model}
                fetch(url,{method:'POST',
                body: JSON.stringify(data),
                 headers:{'Content-Type':'application/json'}})
                 .then(res=>res.json())
                 .catch(error => console.error('Error',error))
                 .then(response => console.log('Success:',response))
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
                    <input type="number"  name="id"  onChange={(e)=>setid(e.target.value)} id="id"/>
                </div>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text"  name="brand"  onChange={(e)=>setbrand(e.target.value)} id="brand"/>
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text"  name="color"  onChange={(e)=>setcolor(e.target.value)} id="color"/>
                </div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input type="text"  name="model"  onChange={(e)=>setmodel(e.target.value)} id="model"/>
                </div>
                <button type="submit">Add</button>
            </form>
            <br/>
        <Link href="/cars">see all cars</Link>
       
      </div>
    )
  }