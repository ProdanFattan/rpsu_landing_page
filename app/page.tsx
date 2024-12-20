import Footer from "@/components/footer"
import Collabrations from "@/components/a_and_c"
import CampusLife from "@/components/campuslife"
import AnimatedGrid from "@/components/animated"
import Slider from "@/components/slider"
import Slider2 from "@/components/card"
export default function Home(){
  return(
    <>
    <Slider/>
    <Slider2></Slider2>
    <CampusLife/>
    <AnimatedGrid/>
    <Collabrations/>
    <Footer/>
    </>
  )
}