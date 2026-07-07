import { Black_Ops_One } from "next/font/google";

const BlackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Loading(){
    return <h2 className={ BlackOpsOne.className }>Loading...</h2>
}