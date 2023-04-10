import Image from 'next/image';
import Link from 'next/link';

export type FooterLink = '/' | '/about'

export interface FooterProps {
    link: FooterLink
    showIcons: boolean
}

export default function Footer({ link, showIcons }: FooterProps) {
    const footerIcons = () => {
        const content = [];
        for (let i = 0; i < 8; i++) {
            content.push(<Image src="/jomleha.svg" alt="لوگوی جمله‌ها" width="12" height="12" key={`footericon${i}`} />);
        }
        return content;
    }
    const footerJustify = showIcons ? "justify-between" : "justify-end"
    return (
        <>
            <footer className='w-full'>
                <div className={`w-full h-24 flex flex-row items-center px-8 lg:px-16 ${footerJustify}`}>
                    {showIcons && (
                        <div className='flex flex-row gap-4 items-center'>
                            <Link href="https://github.com/PHELAT/jomleha.social">
                                <Image src="/github.svg" alt="انبار" width={24} height={24} />
                            </Link>
                            <Link href="https://twitter.com/jomleha_social">
                                <Image src="/twitter.svg" alt="توئیتر" width={24} height={24} />
                            </Link>
                        </div>
                    )}
                    <a href={link}>
                        <div className='grid grid-cols-4 gap-1'>
                            {footerIcons()}
                        </div>
                    </a>
                </div>
            </footer>
        </>
    );
}
