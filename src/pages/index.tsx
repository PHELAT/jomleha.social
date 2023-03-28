import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jomleha</title>
        <meta name="description" content="Jomleha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className='text-3xl font-bold underline'>Hello World!</p>
      </main>
    </>
  )
}