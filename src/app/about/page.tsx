import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "MyApp| About",
    description: "My app about page",
}

export default function About(){
    return  (
        <>
            <h1>About Page</h1>

            <Link href="/">
                <button>Go Home</button>
            </Link>
        </>
    );  
}