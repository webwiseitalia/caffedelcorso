/**
 * Home Page Component
 * Contiene tutte le sezioni della homepage
 */

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Scroll progress indicator
    gsap.to('.scroll-indicator', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative">
      <Loader />
      <div className="scroll-indicator" />
      <Navbar lenis={lenisRef} />

      <main>
        <Hero lenis={lenisRef} />
        <About />
        <Menu />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer lenis={lenisRef} />
    </div>
  )
}
