import { Banner } from '../components/Banner'
import { ClaimFree, StickyClaim } from '../components/ClaimFree'
import { CustomPlan } from '../components/CustomPlan'
import { Faq } from '../components/Faq'
import { BuySteps, Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Locations } from '../components/Locations'
import { Plans } from '../components/Plans'
import { Reviews } from '../components/Reviews'
import { Stats } from '../components/Stats'
import { useHashScroll } from '../useHashScroll'

export function HomePage() {
  useHashScroll()

  return (
    <div className="site-bg min-h-svh">
      <Banner />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Plans />
        <CustomPlan />
        <Locations />
        <Reviews />
        <BuySteps />
        <Faq />
        <ClaimFree />
      </main>
      <StickyClaim />
      <Footer />
    </div>
  )
}
