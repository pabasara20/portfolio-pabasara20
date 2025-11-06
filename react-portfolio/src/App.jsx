import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Works from './components/Works'
import VisualDelight from './components/VisualDelight'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
    const [currentSection, setCurrentSection] = useState('About me')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    // Handle scroll spy to update active navigation
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about-me', 'works', 'visual-delight', 'experience', 'contact']
            const scrollPosition = window.scrollY + 200 // offset for header

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        const sectionName = section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
                        if (sectionName !== currentSection) {
                            setCurrentSection(sectionName === 'About Me' ? 'About me' : sectionName)
                        }
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [currentSection])

    return (
        <div className="min-h-screen bg-white text-black">
            <NavBar
                currentSection={currentSection}
                scrollToSection={scrollToSection}
            />

            {/* Hero Section */}
            <section id="about-me" className="min-h-screen">
                <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
                    <Hero />
                </div>
            </section>

            {/* Works Section */}
            <section id="works" className="min-h-screen">
                <Works />
            </section>

            {/* Visual Delight Section */}
            <section id="visual-delight" className="min-h-screen">
                <VisualDelight />
            </section>

            <section id="experience" className="min-h-screen">
                <Experience />
            </section>

            <section id="contact" className="min-h-screen">
                <Contact />
            </section>
        </div>
    )
}
