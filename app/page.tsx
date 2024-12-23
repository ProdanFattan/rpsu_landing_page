import Footer from "@/components/footer"
import Collabrations from "@/components/a_and_c"
import CampusLife from "@/components/campuslife"
import AnimatedGrid from "@/components/animated"
import Slider from "@/components/slider"
import CardSlider from "@/components/card"
import Navbar from "@/components/navbar"
import Banner from "@/components/banner"
import CardCarousel from "@/components/card"
import FounderSection from "@/components/founder"
import NoticeSection from "@/components/notice_section"
export default function Home(){
  return(
    <>
    <div className=" mx-auto overflow-hidden bg-section_back">
    <Navbar/>
    <Banner/>
    <NoticeSection/>
    <CardCarousel/>
    <FounderSection/>
    <CampusLife/>
    <AnimatedGrid/>
    <Collabrations/>
    <Footer/> 
    </div>
    </>
  )
}