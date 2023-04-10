import Footer from '@/components/footer';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className='flex flex-col h-screen justify-between bg-black'>
                <main className='w-full h-full flex items-center justify-center px-8'>
                    <div className='flex flex-col'>
                        <p>تو این تاریکی کنار ماه</p>
                        <p>زمان نداره نگاه به ما</p>
                        <p>ماییم و روح روشنایی</p>
                        <p>سال هاست که مردن ستاره‌ها</p>
                    </div>
                </main>
                <Footer link='/' showIcons={true} />
            </div>
        </>
    )
}
