import HeroSection from '../cmps/HomePage/HeroSection'
import HomeNav from '../cmps/HomePage/HomeNav'
import NewArrivals from '../cmps/HomePage/NewArrivals'

export default function HomePage() {
  return (
    <div>
      <HomeNav />
      <HeroSection />
      <NewArrivals />
    </div>
  )
}
