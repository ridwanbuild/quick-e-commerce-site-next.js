import AllProducts from "@/Components/AllProducts";
import FeaturesProduct from "@/Components/FeaturesProduct";
import HeroSection from "@/Components/HeroSection";
import LevelUp from "@/Components/LevelUp";
import Subscribe from "@/Components/Subscribe";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <div className="container m-auto px-4">
        {" "}
        <HeroSection></HeroSection>
        <AllProducts></AllProducts>{" "}
      </div>


      <FeaturesProduct></FeaturesProduct>


        <div className="container m-auto px-4">
              <LevelUp></LevelUp>
              <Subscribe></Subscribe>
        </div>


    </div>
  );
}
