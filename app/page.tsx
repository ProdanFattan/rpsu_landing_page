import Footer from "@/components/footer"
import Collabrations from "@/components/a_and_c"
import CampusLife from "@/components/campuslife"
import AnimatedGrid from "@/components/animated"
import Slider from "@/components/slider"
import CardSlider from "@/components/card"
import Navbar from "@/components/navbar"
import Banner from "@/components/banner"
import CardCarousel from "@/components/card"
export default function Home(){
  return(
    <>
    <div className=" mx-auto overflow-hidden bg-section_back">
    <Navbar/>
    <Banner/>
    <CardCarousel/>
    {/* <Slider/>
   <CardSlider/>
    <CampusLife/>
    <AnimatedGrid/>
    <Collabrations/>
    <Footer/> */}
    </div>
    </>
  )
}