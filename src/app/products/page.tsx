import Link from "next/link"
export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the Products Page</h1>

      <ul>
        <li><Link href="products/1">Product 1 </Link></li> 
        <li><Link href="products/2">Product 2</Link></li>
        <li><Link href="products/3/reviews/3">Product 3</Link></li>
      </ul>
    </main>
  );
} 