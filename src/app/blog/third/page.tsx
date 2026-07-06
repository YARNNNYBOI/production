import Link from "next/link";

export default function ThirdBlog() {
  return (
    <>
    <h1>Third Blog Page</h1>

    <Link href="/blog/first">
      <button>Go to first blog</button>
    </Link>
    </>
      
  );
}