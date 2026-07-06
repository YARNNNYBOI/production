export const metadata = { 
  title: 'GBK',
  description: 'Landing page if Gundam Building Kits',
};

export default function RootLayout({ 
  children  
}: {
   children: React.ReactNode 
}) {
  return (
    <html lang="en">  

      <body>

<nav>
   
</nav>
        <header style={{
          padding: "2%",
          backgroundColor: "green",

        }}>
        <h1>
            HEADER
        </h1>
        </header>
    
    {children}
    
    <footer 
    style={{
      padding: "2%",
      backgroundColor: "yellow",
    }}>
      <h1>
        FOOTER
      </h1>
    </footer>

    </body>

    </html>
  );
}