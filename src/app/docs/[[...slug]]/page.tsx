import {notFound} from "next/navigation";

export default async function Docs({
params,
}: {
params:Promise<{slug: string[]}>;
}) {
    const {slug} = await params;
    if(slug?.length === 1){
        return (
            <h1>
                Docs reviewing for {slug[0]}
            </h1>
        );
    }else if (slug?.length === 2){
        return (
            <h1>
                Docs reviewing for {slug[0]} and {slug[1]} 
            </h1>
        );
    }else if(slug?.length === 3){
        return (
            <h1>
                Docs reviewing for {slug[0]} and {slug[1]} and {slug [2]}
            </h1>
        );
    } else {
            notFound();
    }
        
    
}