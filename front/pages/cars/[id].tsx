import { captureRejections } from 'events'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { Icar } from '../../types'

interface CarProps {
    carinfo:Icar
}

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

const Detail = async({carinfo}:CarProps)=>{
  console.log("carinfo",carinfo)
      return (
          <div>
            <h2>Brand = {carinfo.brand}</h2>
            <h2>Color = {carinfo.color}</h2>
            <h2>Model = {carinfo.model}</h2>
  
            <Link href="/cars">see all cars</Link>
          </div>
        )
  }
  
  export default Detail

  export const getStaticProps = async(context: { params: { id: number } })=>{
        const id = context.params.id;
        const res = await fetch('http://localhost:8000/car/'+id)
        const data = await res.json();
        return{
            props:{carinfo:data}
        }
    }

    export const getStaticPaths = async ()=> {
          const res = await fetch(`http://localhost:8000/car`)
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


      //   export async function getServerSideProps({params}:GetServerSidePropsContext){
      //     const res = await fetch(`localhost:8000/car/${params?.id}`)
      //     const data = await res.json();
      //     return{
      //         props:{carinfo:data}
      //     }
      // }