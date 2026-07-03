export default async function productPage({
    params,
}: {
    params: Promise<{productID: string}>;
}) {
    const {productID} = await params;
    return <h1>{productID}</h1>;
}