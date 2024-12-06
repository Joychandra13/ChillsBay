import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import GALARY from './components/GALARY'
import HeroArea from './components/HeroArea'
import ImgSection from './components/ImgSection'
import Nevbar from './components/Nevbar'
import ThingsCard from './components/ThingsToDo'
import WhyUs from './components/WhyUse'

function App() {

  return (
    <>
    <Nevbar/>
    <HeroArea/>
    <ImgSection/>
    <ThingsCard/>
    <WhyUs/>
    <Carousel/>
    <GALARY/>
    <Footer/>
    </>
  )
}

export default App
