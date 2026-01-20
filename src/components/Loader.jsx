/**
 * LOADER - Terrosa Chaotic Entrance
 * Loader cinematografico con elementi ruotati
 */

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Loader() {
  const loaderRef = useRef(null)
  const textRef = useRef(null)
  const counterRef = useRef(null)
  const lineRef = useRef(null)
  const yearRef = useRef(null)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true)
        document.body.style.overflow = 'auto'
      },
    })

    document.body.style.overflow = 'hidden'

    // Year fade in con rotazione
    tl.fromTo(
      yearRef.current,
      { opacity: 0, rotate: -10, scale: 0.8 },
      { opacity: 0.1, rotate: 0, scale: 1, duration: 1, ease: 'power3.out' },
      0
    )

    // Line grow con angolo
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, rotate: -3 },
      { scaleX: 1, rotate: 3, duration: 2, ease: 'power2.inOut' },
      0
    )

    // Counter animation
    const counter = { value: 0 }
    tl.to(
      counter,
      {
        value: 100,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value)
              .toString()
              .padStart(3, '0')
          }
        },
      },
      0
    )

    // Text reveal con effetto caotico
    const chars = textRef.current?.querySelectorAll('.char') || []
    tl.fromTo(
      chars,
      {
        y: () => gsap.utils.random(40, 80),
        opacity: 0,
        rotate: () => gsap.utils.random(-15, 15),
      },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        stagger: {
          each: 0.04,
          from: 'random',
        },
        duration: 0.8,
        ease: 'power3.out',
      },
      0.5
    )

    // Exit animation - split diagonale
    tl.to(yearRef.current, {
      opacity: 0,
      scale: 1.5,
      duration: 0.8,
      ease: 'power3.in',
    }, '-=0.2')

    tl.to(loaderRef.current, {
      yPercent: -100,
      rotate: 2,
      duration: 1.2,
      ease: 'power4.inOut',
    }, '-=0.6')

    return () => tl.kill()
  }, [])

  if (isComplete) return null

  return (
    <div
      ref={loaderRef}
      className="loader"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Grande anno di sfondo */}
      <div
        ref={yearRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontSize: 'clamp(15rem, 40vw, 40rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-warm)',
          lineHeight: 0.8,
          opacity: 0,
        }}
      >
        1985
      </div>

      <div className="relative flex flex-col items-center">
        {/* Brand text */}
        <div ref={textRef} className="mb-8">
          <h1
            className="text-headline text-center tracking-wider"
            style={{ color: 'var(--color-text)' }}
          >
            {'Caffè del Corso'.split('').map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{
                  color: char === 'd' || char === 'e' || char === 'l'
                    ? 'var(--color-rust)'
                    : 'var(--color-text)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Progress line */}
        <div className="relative w-48 h-[2px] mb-6">
          <div
            className="absolute inset-0"
            style={{ background: 'var(--color-bg-warm)' }}
          />
          <div
            ref={lineRef}
            className="absolute inset-0 origin-left"
            style={{
              background: 'var(--color-rust)',
              transform: 'scaleX(0)',
            }}
          />
        </div>

        {/* Counter */}
        <div className="flex items-center gap-4">
          <span
            ref={counterRef}
            className="text-mono"
            style={{ color: 'var(--color-text-muted)' }}
          >
            000
          </span>
          <span
            className="text-small"
            style={{ color: 'var(--color-rust)' }}
          >
            %
          </span>
        </div>

        {/* Tagline */}
        <p
          className="absolute bottom-0 translate-y-24 text-small"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Darfo Boario Terme
        </p>
      </div>

      {/* Linee decorative */}
      <div
        className="absolute top-20 left-[20%] w-px h-16"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(15deg)',
        }}
      />
      <div
        className="absolute bottom-20 right-[25%] w-12 h-px"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(-10deg)',
        }}
      />
    </div>
  )
}
