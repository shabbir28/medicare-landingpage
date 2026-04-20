import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Steps } from './components/sections/Steps'
import { Info } from './components/sections/Info'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Info />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

