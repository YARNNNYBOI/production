export default async function ReviewsPage({ 
    params,
}: {
    params: Promise<{ productsId: string; reviewsId: string}>;
}) {
    const { productsId, reviewsId } = await params
    return (
        <h1>Reviews on Product {reviewsId} for Product {productsId}</h1>
    )
}
