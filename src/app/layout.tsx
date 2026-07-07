export const metadata = { 
  title: 'GBK | Landing',
  description: 'Landing page if Gundam Building Kits',
};

export default function RootLayout({ 
  children  
}: {
   children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: "#1E3A5F",
      }}>
        {children}
      </body>
    </html>
  );
}