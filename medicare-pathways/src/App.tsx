import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { CcpPolicy } from './components/sections/CcpPolicy'
import { Testimonials } from './components/sections/Testimonials'
import { DncPolicy } from './components/sections/DncPolicy'
import { Contact } from './components/sections/Contact'
import { TermsAndConditions } from './components/sections/TermsAndConditions'
import { Footer } from './components/sections/Footer'
import { MobileStickyForm } from './components/sections/MobileStickyForm'

const TERMS_HASH = '#terms-and-conditions'

export default function App() {
  const [showTermsPage, setShowTermsPage] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === TERMS_HASH
  )

  useEffect(() => {
    const updateViewFromHash = () => {
      setShowTermsPage(window.location.hash === TERMS_HASH)
    }

    updateViewFromHash()
    window.addEventListener('hashchange', updateViewFromHash)
    return () => window.removeEventListener('hashchange', updateViewFromHash)
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        {showTermsPage ? (
          <TermsAndConditions />
        ) : (
          <>
            <Hero />
            <Features />
            <CcpPolicy />
            <Testimonials />
            <DncPolicy />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <MobileStickyForm />
    </div>
  )
}

