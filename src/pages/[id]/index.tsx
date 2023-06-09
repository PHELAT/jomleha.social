import Head from "next/head";
import Footer from "@/components/footer";
import initFirebase from '@/firebase';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Jomleh } from '@/components/jomleha';
import Link from "next/link";

async function fetchJomleh(id: string): Promise<Jomleh> {
    const { getFirestore } = require('firebase-admin/firestore');

    const db = getFirestore();
    const snapshot = await db.collection('jomleha').doc(id).get();
    if (!snapshot.exists) {
        return Promise.reject()
    }
    const jomleh: Jomleh = {
        id: snapshot.id,
        ...JSON.parse(JSON.stringify(snapshot.data()))
    }

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
                <meta name="description" content={pageProps.jomleh} />
            </Head>
            <div className='flex flex-col h-screen justify-between'>
                <main className='w-full h-full flex items-center justify-center px-8'>
                    <div className='max-w-md'>
                        <div className="border-s-2 border-stone-500 rounded border-dotted ps-4" dir="auto">
                            <div className='flex flex-col overflow-y-auto zarfeZer'>
                                <p className='zer'>{pageProps.jomleh}</p>
                                {renderContext(pageProps)}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer link="/" showIcons={false} />
            </div>
        </>
    )
}

function renderContext(pageProps: Jomleh) {
    if (pageProps.context === undefined) {
        return (<></>)
    }
    const isUrl = pageProps.context.url !== undefined
    const contextTitle = (<p className={`manbaZer ${isUrl ? "hover:underline" : "pt-8"}`}>{pageProps.context.title}</p>);
    return (
        <>
            {isUrl
                ? (<Link href={pageProps.context.url!} className="mt-8" target="blank">{contextTitle}</Link>)
                : contextTitle
            }
        </>
    )
}
