
export const metadata = {
  title: 'next.js',
  description: 'hello po'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang="en">
            <body>
                <header
                    style = {{
                        backgroundColor:"lightblue",
                        padding: "10px",

                    }}
                >
                    <p>Header</p>
                </header>
                {children}
                <footer
                    style = {{
                        backgroundColor:"lightblue",
                        padding: "10px",

                    }}
                >
                    <p>Footer</p>
                </footer>
            </body>
        </html>
      )
  }
