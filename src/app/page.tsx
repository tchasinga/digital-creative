import Image from "next/image";
import Heros from "./Components/Heros";
import Winning from "./Components/Winning";
import Codedriving from "./Components/Codedriving";
import Ourservices from "./Components/Ourservices";
import Swipper from "./Components/Swipper";

export default function Home() {
  return (
   <>
   <Heros   />
   <Winning />
   <Codedriving />
   <Ourservices />
   <Swipper />
  </>
  );
}
