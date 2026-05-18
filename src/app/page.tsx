import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import HowItWorks from '@/components/HowItWorks'
import MechanicsSection from '@/components/MechanicsSection'
import ForBusinesses from '@/components/ForBusinesses'
import AppPreview from '@/components/AppPreview'
import RiskFreeSection from '@/components/RiskFreeSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <MechanicsSection />
        <ForBusinesses />
        <AppPreview />
        <RiskFreeSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
