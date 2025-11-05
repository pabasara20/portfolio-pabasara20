import React, { useState } from 'react'

export default function NavBar({ currentSection, scrollToSection }) {
    const items = ['About me', 'Works', 'Visual Delight', 'Experience', 'Contact']
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (page) => {
        const sectionId = page.toLowerCase().replace(' ', '-')
        scrollToSection(sectionId)
        setIsMenuOpen(false) // Close mobile menu after clicking
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-header">
            <div className="flex items-center justify-between pt-4 md:pt-9 pb-0 md:pb-0 px-4 md:px-8 backdrop-blur-lg bg-white/40">
                <div className="text-gray-700 font-bold text-sm md:text-base">
                   Logo Here
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="nav-container">
                        <ul className="flex items-center gap-3">
                            {items.map((label) => (
                                <li key={label}>
                                    {label === currentSection ? (
                                        <button className="nav-active">
                                            {label}
                                        </button>
                                    ) : (
                                        <button
                                            className="nav-item"
                                            onClick={() => handleNavClick(label)}
                                        >
                                            {label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Mobile Burger Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 mr-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Desktop Spacer */}
                <div className="hidden md:block" style={{ width: 20 }}></div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-in slide-in-from-top duration-300">
                    <nav className="px-4 py-4">
                        <ul className="space-y-2">
                            {items.map((label, index) => (
                                <li key={label} className="animate-in slide-in-from-left duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                                    {label === currentSection ? (
                                        <button className="w-full text-left px-4 py-3 bg-black text-white rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
                                            {label}
                                        </button>
                                    ) : (
                                        <button
                                            className="w-full text-left px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1"
                                            onClick={() => handleNavClick(label)}
                                        >
                                            {label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}
