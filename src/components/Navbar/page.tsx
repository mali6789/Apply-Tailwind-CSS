import Link from "next/link"
export default function Navbar(){
    return(
        <nav  className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">My Portfolio</div>
        <div  className="flex space-x-4">
                    <Link href="/Home" className="hover:text-gray-300">Home</Link>
                    <Link href="/About" className="hover:text-gray-300">About</Link>
                    <Link href="/Contact" className="hover:text-gray-300">Contact</Link>
        </div>
        </nav>
    )
}