import Link from "next/link";

export default function NavBar() {
    return (
        <>
          <header className='w-full'>
            <div className="w-full px-8 lg:px-16 pt-8 pb-0 flex flex-row justify-between items-center">
                <Link href={"/"}>
                    <h1 className="font-serif font-bold text-3xl inline">ج</h1>
                </Link>
            </div>
          </header>
        </>
    );
}
