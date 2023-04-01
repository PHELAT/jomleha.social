import Head from "next/head";
import Footer from "@/components/footer";
import initFirebase from '@/firebase';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Jomleh } from '@/components/jomleha';

async function fetchJomleh(id: string): Promise<Jomleh> {
    const { getFirestore } = require('firebase-admin/firestore');

    const db = getFirestore();
    const snapshot = await db.collection('jomleha').doc(id).get();
    if (!snapshot.exists) {
        return Promise.reject()
    }
    const jomleh = { id: snapshot.id, ...snapshot.data() }

    return jomleh;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    await initFirebase();
    return await fetchJomleh(`${id}`)
        .then(pageProps => {
            return {
                props: {
                    pageProps,
                }
            }
        })
        .catch(error => {
            return {
                notFound: true,
            }
        });
}

export default function JomlehPage({ pageProps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Jomleha</title>
                <meta name="description" content="Jomleha" />
            </Head>
            <div className='flex flex-col h-screen justify-between'>
                <main className='w-full h-full flex items-center justify-center px-8'>
                    <div className='flex flex-col max-w-md'>
                        <div className='overflow-y-auto'>
                            <p className='zer'>{pageProps.jomleh}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
