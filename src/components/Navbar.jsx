import Link from "next/link";

export default function Navbar () {
    return (
        <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div>
                <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold">
                <span className="text-white">Lucas</span>
                <span className="w-12 rounded bg-white text-black">Hess</span>
                </Link>
            </div>
            <div>2</div>
        </div>
    )
}