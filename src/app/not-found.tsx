import Link from "next/link"
export default function PageNotFound(){
    return(
        <div>
            <h2 className="text-2xl font-bold underline">Not Found</h2>
      <p className="text-3xl font-bold underline">Could not find requested resource</p>
      <Link href="/Home" className="text-1xl font-bold underline text-center">Return Home</Link>
        </div>
    )
}