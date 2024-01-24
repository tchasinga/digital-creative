import Image from "next/image";
import Heros from "./Components/Heros";
import Winning from "./Components/Winning";
import Codedriving from "./Components/Codedriving";

export default function Home() {
  return (
   <>
   <Heros   />
   <Winning />
   <Codedriving />
  </>
  );
}
