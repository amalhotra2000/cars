import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
        </Head>
      <h1><Link href="/cars">See cars</Link></h1>
    </div>
  )
}

