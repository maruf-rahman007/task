import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
   </div>
  );
}
