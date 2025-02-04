import { resolve } from "path"

export default async function Contact(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 5000)
    })


    
    return(
        <div>
        <h1>CONTACT</h1>
    </div>
    )
}