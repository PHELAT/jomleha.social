import Footer from '@/components/footer';
import { Jomleh, JomlehaProps } from '@/components/jomleha';
import Jomleha from '@/components/jomleha';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { get } from '@vercel/edge-config';

async function initFirebase() {
  const { initializeApp, cert, getApps, getApp } = require('firebase-admin/app');

  const credentials = await get('GOOGLE_APPLICATION_CREDENTIALS');
  const config = {
    credential: cert(credentials),
    databaseURL: process.env.FIREBASE_URL
  };
  const app = !getApps().length ? initializeApp(config) : getApp()
}

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
