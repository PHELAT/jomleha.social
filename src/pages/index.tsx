import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import Head from 'next/head'

function Scroll() {
  const content = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(<p className='zer'>این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است این یک جمله‌ی تست است </p>);
    }
    return items;
  }
  return (
    <>
      <main className='w-full flex items-center justify-center px-8 lg:px-16 pt-8'>
        <div className='max-w-full md:max-w-md lg:max-w-xl max-h-96 overflow-y-auto'>
          <div className='flex flex-col gap-y-4'>
            {content()}
          </div>
        </div>
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
