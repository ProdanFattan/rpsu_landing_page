import Footer from "@/components/footer"
import Collabrations from "@/components/a_and_c"
import CampusLife from "@/components/campuslife"
import AnimatedGrid from "@/components/animated"
import Slider from "@/components/slider"
import CardSlider from "@/components/card"
export default function Home(){
  return(
    <>
    <div className="w-full mx-auto overflow-hidden">
    <Slider/>
   <CardSlider/>
    <CampusLife/>
    <AnimatedGrid/>
    <Collabrations/>
    <Footer/>
    </div>
    </>
  )
}