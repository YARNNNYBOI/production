"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
  {name: "Forgot Password", href: "/forgot-password"},
  {name: "Login", href: "/login"},
  {name: "Register", href: "/register"},
];

export default function authLayout({ 
  children,
}: {
   children: React.ReactNode  
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        return ( 
            <Link href = {link.href} key = {link.name}>
              {link.name}
            </Link>
          ); 
        })}
        {children}
      </div>

  );
}