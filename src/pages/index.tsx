import Footer from '@/components/footer';
import { Jomleh, JomlehaProps } from '@/components/jomleha';
import Jomleha from '@/components/jomleha';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import initFirebase from '@/firebase';

async function fetchJomleha(): Promise<Jomleh[]> {
  const { getFirestore } = require('firebase-admin/firestore');

  const db = getFirestore();
  const snapshot = await db.collection('jomleha').get();
  const jomleha: Jomleh[] = []
  snapshot.forEach((doc: any) => {
    jomleha.push({ id: doc.id, jomleh: doc.data().jomleh });
  });
  return jomleha;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await initFirebase();
  const jomleha: Jomleh[] = await fetchJomleha();
  const pageProps: JomlehaProps = {
    content: jomleha
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
