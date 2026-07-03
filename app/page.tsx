import Link from 'next/link'
import Image from "next/image";

export default function Home() {
  const productId = 100;
  return (
    <div>
      <h1>Hello</h1>
      <Link href = "/profile">Profile</Link>
      <Link href = {`/products/${productId}`}> Product {productId}</Link>
    </div>
  )
}
