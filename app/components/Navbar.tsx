import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-white w-full z-20 sticky border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://mysticalforestcat.s3.us-east-2.amazonaws.com/icons/forestcat.svg" className="h-16" alt="Flowbite Logo"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Mystical Forest Cat</span>
                </Link>
            </div>
        </nav>
    );
}