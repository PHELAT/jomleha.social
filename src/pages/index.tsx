import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import Head from 'next/head'

function Scroll() {
  return (
    <>
      <main className='w-full px-8 lg:px-16 pt-8 pb-0'>

      </main>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jomleha</title>
        <meta name="description" content="Jomleha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col h-screen justify-between'>
        <NavBar />
        <Scroll />
        <Footer />
      </div>
    </>
  )
}
