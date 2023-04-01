import Footer from '@/components/footer';
import { Jomleh, JomlehaProps } from '@/components/jomleha';
import Jomleha from '@/components/jomleha';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sampleData: Jomleh[] = []
  for (let i = 0; i < 30; i++) {
    sampleData.push(
      {
        id: i,
        jomleh: "این یک جمله‌ی تست است."
      }
    );
  }
  const pageProps: JomlehaProps = { 
    content: sampleData
  }
  return {
    props: {
      pageProps,
    }
  }
}

export default function Home({ pageProps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Jomleha</title>
        <meta name="description" content="Jomleha" />
      </Head>
      <div className='flex flex-col h-screen justify-between'>
        <Jomleha {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
