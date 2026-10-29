import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection/Hero'
import Footer from '@/components/Footer'
import AnalyticsSection from '@/components/SubHeroSection/AnalyticsSection'
import PropertiesSection from '@/components/PropertySection/PropertiesSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import IntroSection from '@/components/SubHeroSection/IntroSection'
import FeedbackSection from '@/components/FeedbackSection/FeedbackSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-bg-sheet">
        <Hero />
        <AnalyticsSection />
        <IntroSection />
        <PropertiesSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
