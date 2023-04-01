import { useRouter } from 'next/router';
import Head from "next/head";
import Footer from "@/components/footer";

export default function JomlehPage() {
    const router = useRouter()
    const id = router.query.id as string

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
                            <p className='zer'>{id}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
