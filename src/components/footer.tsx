import Image from 'next/image';

export default function Footer() {
    const footerIcons = () => {
        const content = [];
        for (let i = 0; i < 8; i++) {
            content.push(<Image src="/jomleha.svg" alt="لوگوی جمله‌ها" width="12" height="12" key={`footericon${i}`}/>);
        }
        return content;
    }
    return (
        <>
            <footer className='w-full'>
                <div className="w-full h-24 flex flex-row items-center px-8 lg:px-16 justify-end">
                    <a href="https://twitter.com/jomleha_social">
                        <div className='grid grid-cols-4 gap-1'>
                            {footerIcons()}
                        </div>
                    </a>
                </div>
            </footer>
        </>
    );
}
