export default async function Docs ({
    params,
}: {
     params: Promise<{ slug: string[] }>; 
}) {
    const {slug} = await params;
    if (slug?.length === 2){
 return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Viewing docs for feature {slug[0]} and concept {slug[1]}.</h1>
        </main>
    );
    } else if (slug?.length === 1) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Viewing docs for feature {slug[0]}.</h1>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Docs home page.</h1>
        </main>
    );
}