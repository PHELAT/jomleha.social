import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <>
          <header className='w-full'>
            <div className="w-full px-8 lg:px-16 pt-8 pb-0 flex flex-row justify-between items-center">
                <Link href={"/"}>
                  <Image src="/jomleha.svg" alt="لوگوی جمله‌ها" width="36" height="36" />
                </Link>
            </div>
          </header>
        </>
    );
}
