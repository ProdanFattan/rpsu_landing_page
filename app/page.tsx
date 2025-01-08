import Footer from "@/components/footer"
import Collabrations from "@/components/a_and_c"
import CampusLife from "@/components/campuslife"
import AnimatedGrid from "@/components/animated"
import Admission from "@/components/admission";
import Banner from "@/components/banner"
import CardCarousel from "@/components/card"
import FounderSection from "@/components/founder"
import NoticeSection from "@/components/notice_section"
export default function Home(){
  return(
    <>
    <Banner/>
    <NoticeSection/>
    <CardCarousel/>
    <FounderSection/>
    <CampusLife/>
    <AnimatedGrid/>
    <Collabrations/>
    <Footer/> 
    {/* <Admission/> */}
    </>
  )
}