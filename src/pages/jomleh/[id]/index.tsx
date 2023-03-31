import { useRouter } from 'next/router';
import Head from "next/head";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function Jomleh(content: string) {
    return (
        <>
            <p className='zer'>{content}</p>
        </>
    )
}

interface ScrollComponent {
    content: string
}

function Scroll(props: ScrollComponent) {
    return (
        <>
            <main className='w-full flex items-center justify-center px-8 lg:px-16 pt-8'>
                <div className='max-w-full md:max-w-md lg:max-w-xl max-h-96 overflow-y-auto'>
                    <div className='flex flex-col gap-y-4'>
                        {Jomleh(props.content)}
                    </div>
                </div>
            </main>
        </>
    )
}

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
                <NavBar />
                <Scroll content={id}/>
                <Footer />
            </div>
        </>
    )
}
