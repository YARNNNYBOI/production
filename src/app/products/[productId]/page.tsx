export default async function productdetails( {
    params,
}: { params: Promise< { productId: string } >; 
}) {
    const productId = (await params).productId;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">This is the product details page of product {productId}.</h1>
        </main>
    );
}