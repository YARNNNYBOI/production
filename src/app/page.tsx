import Link from "next/link";

export default async function home(){
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000);
    })

    return (
        <header>
            <nav>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/sign-in">Sign in</Link>
            </nav>
        </header>
    )
}