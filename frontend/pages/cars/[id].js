import Link from 'next/link'

export const getStaticPaths = async ()=> {
    const res = await fetch(`http://localhost:8000/car`)
    const data = await res.json()
    
    const paths = data.map(car=>{
        return{
            params:{id:car.id.toString()}
        }
    })
  
    return {
      paths,
      fallback:false
    }
  }

  export const getStaticProps = async(context)=>{
        const id = context.params.id;
        const res = await fetch('http://localhost:8000/car/'+id)
        const data = await res.json();

        return{
            props:{carinfo:data}
        }
  }

export default function Detail({carinfo}){
    return (
        <div>
          <h2>Brand = {carinfo.brand}</h2>
          <h2>Color = {carinfo.color}</h2>
          <h2>Model = {carinfo.model}</h2>

          <Link href="/cars">see all cars</Link>
        </div>
      )
}



  
  