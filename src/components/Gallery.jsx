/**
 * GALLERY - Scattered Masonry Chaos
 * Immagini posizionate in modo caotico con rotazioni e sovrapposizioni
 */

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

// Import sfondi
import sfondoGallery from '../assets/sfondi/sfondi-6.webp'

// Import photos
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const bigTextRef = useRef(null)

  // Galleria ridotta a 6 foto
  const galleryItems = [
    { id: 1, image: foto17, title: 'Atmosfera Conviviale', rotate: -2, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
    { id: 2, image: foto2, title: 'Pizza Condivisa', rotate: 2, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
    { id: 3, image: foto8, title: 'Yogurt e Granola', rotate: -1, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
    { id: 4, image: foto15, title: 'Aperitivo Time', rotate: 3, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
    { id: 5, image: foto18, title: 'Poke Bowl', rotate: -2, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
    { id: 6, image: foto1, title: 'Zabaione Artigianale', rotate: 2, scale: 1, col: 'col-span-6 md:col-span-4', aspect: '4/5' },
  ]

  // Post Instagram - collegati al profilo
  const instagramPosts = [
    { id: 1, image: foto10, alt: 'Post Instagram 1' },
    { id: 2, image: foto7, alt: 'Post Instagram 2' },
    { id: 3, image: foto5, alt: 'Post Instagram 3' },
    { id: 4, image: foto4, alt: 'Post Instagram 4' },
    { id: 5, image: foto6, alt: 'Post Instagram 5' },
    { id: 6, image: foto14, alt: 'Post Instagram 6' },
  ]

  const instagramUrl = 'https://www.instagram.com/caffedelcorsoboario/'

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big text parallax
      gsap.to(bigTextRef.current, {
        xPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Titolo reveal
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.word') || [],
        {
          y: 80,
          opacity: 0,
          rotate: () => gsap.utils.random(-10, 10),
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: {
            each: 0.1,
            from: 'random'
          },
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      // Gallery items - entrano da direzioni random
      const items = gridRef.current?.querySelectorAll('.gallery-item') || []
      items.forEach((item, i) => {
        const directions = [
          { x: -60, y: 40, rotate: -8 },
          { x: 60, y: 30, rotate: 8 },
          { x: -40, y: 50, rotate: -5 },
          { x: 40, y: 60, rotate: 5 },
        ]
        const dir = directions[i % 4]

        gsap.fromTo(
          item,
          {
            x: dir.x,
            y: dir.y,
            opacity: 0,
            rotate: dir.rotate,
            scale: 0.9,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Sfondo decorativo grande */}
      <div
        className="absolute -bottom-20 -right-20 w-[50%] h-[60%] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${sfondoGallery})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          opacity: 0.25,
        }}
      />

      {/* Grande testo di sfondo */}
      <div
        ref={bigTextRef}
        className="absolute top-1/3 -left-20 whitespace-nowrap pointer-events-none select-none"
        style={{
          fontSize: 'clamp(10rem, 25vw, 25rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-warm)',
          lineHeight: 0.8,
          fontWeight: 400,
        }}
      >
        Galleria
      </div>

      {/* Label verticale */}
      <div
        className="absolute left-4 md:left-8 top-32 text-small text-vertical hidden md:block"
        style={{ color: 'var(--color-text-muted)', transform: 'rotate(180deg)' }}
      >
        Galleria — 05
      </div>

      <div className="container-wide relative">
        {/* Header asimmetrico */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-6 md:col-start-6 md:text-right">
            <p
              className="text-small mb-4"
              style={{ color: 'var(--color-rust)' }}
            >
              Scorci del Nostro Mondo
            </p>
            <div ref={titleRef}>
              <h2 className="text-display" style={{ color: 'var(--color-text)' }}>
                {'Momenti di'.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
                <br />
                <span className="word inline-block" style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  gusto
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Chaos Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item group cursor-pointer ${item.col}`}
              style={{
                transform: `rotate(${item.rotate}deg)`,
                marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '-1rem' : 0,
              }}
              onClick={() => setSelectedImage(item)}
            >
              <div
                className="relative overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-0"
                style={{
                  aspectRatio: item.aspect,
                  transform: `scale(${item.scale})`,
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - Galleria Caffè del Corso`}
                  title={item.title}
                  loading="lazy"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay scuro su hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(28, 25, 23, 0.9) 0%, transparent 60%)',
                  }}
                />

                {/* Titolo su hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p
                    className="text-small"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.title}
                  </p>
                </div>

                {/* Accento decorativo */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    borderTop: '2px solid var(--color-rust)',
                    borderRight: '2px solid var(--color-rust)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className="mt-24 md:mt-32">
          {/* Header Instagram */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 px-6 lg:px-0">
            <div>
              <p
                className="text-small mb-2"
                style={{ color: 'var(--color-rust)' }}
              >
                Seguici su Instagram
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-headline hover:text-[var(--color-rust)] transition-colors duration-300 inline-flex items-center gap-3"
                style={{ color: 'var(--color-text)' }}
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-rust)' }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @caffedelcorsoboario
              </a>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Vai al profilo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={`${post.alt} - Instagram @caffedelcorsoboario`}
                  title="Seguici su Instagram @caffedelcorsoboario"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay con icona Instagram */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(180, 83, 9, 0.8)' }}
                >
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linee decorative */}
      <div
        className="absolute top-[20%] right-[15%] w-px h-[150px] hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.3,
          transform: 'rotate(20deg)'
        }}
      />
      <div
        className="absolute bottom-[30%] left-[10%] w-[100px] h-px hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(-10deg)'
        }}
      />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal flex items-center justify-center p-4"
            style={{ background: 'rgba(28, 25, 23, 0.98)' }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:rotate-90"
              style={{ color: 'var(--color-text)' }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 5 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <p
                className="mt-6 text-center text-small"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
