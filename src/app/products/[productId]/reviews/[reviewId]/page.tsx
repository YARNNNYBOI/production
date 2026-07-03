export default async function productreviews( {
    params,
}: { 
    params: Promise <{ productId: string; reviewId: string } >;
}) {
    const {productId, reviewId} = await params;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">This is the review page of product {productId} and review {reviewId}.</h1>
        </main>
    );
}

