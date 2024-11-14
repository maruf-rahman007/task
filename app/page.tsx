import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import PopularCourse from "./components/popularcourses";
import Providings from "./components/providings";
import Reviews from "./components/reviews";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <PopularCourse/>
    <Providings/>
    <Reviews/>
    <Footer/>
   </div>
  );
}
