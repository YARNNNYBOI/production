export default async function Productdetails({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) {
    const productsId = (await params).productsId;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Product ID: {productsId}</h1>
        </main>
  );    
}