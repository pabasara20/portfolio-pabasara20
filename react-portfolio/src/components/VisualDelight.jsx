import React, { useState, useEffect } from 'react'

export default function VisualDelight() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentDesignSlide, setCurrentDesignSlide] = useState(0)

    // ✅ Mobile UI section (replace image paths with your real screenshots)
    const mobileInterfaces = [
        {
            id: 1,
            title: "Order Tracking",
            description: "Track orders in real time with smooth progress tracking and delivery updates.",
            image: "/assets/ui-tracking.png",
        },
        {
            id: 2,
            title: "Navigation Map",
            description: "Interactive delivery map with pickup and drop-off points.",
            image: "/assets/ui-map.png",
        },
        {
            id: 3,
            title: "Wallet & Earnings",
            description: "Simple wallet view to monitor your balance and transaction history.",
            image: "/assets/ui-wallet.png",
        },
        {
            id: 4,
            title: "Offer Management",
            description: "Easily view, create, and manage promotional offers.",
            image: "/assets/ui-offers.png",
        },
    ]

    // ✅ Visual design portfolio cards
    const visualDesigns = [
        {
            id: 1,
            title: "Shopsy Mela Visuals",
            description: "A vibrant visual campaign crafted for the festive Shopsy Mela sale.",
            year: "2023",
            backgroundColor: "bg-gradient-to-br from-blue-500 to-purple-600",
            category: "Branding & Visuals",
        },
        {
            id: 2,
            title: "Campaign Designs",
            description: "A collection of engaging promotional visuals made for social media.",
            year: "2022",
            backgroundColor: "bg-gradient-to-br from-purple-500 to-pink-600",
            category: "Campaign Design",
        },
        {
            id: 3,
            title: "Shopsy Brand Playbook",
            description: "Brand guideline playbook to maintain visual consistency and tone.",
            year: "2022",
            backgroundColor: "bg-gradient-to-br from-green-400 to-blue-500",
            category: "Brand Guidelines",
        },
        {
            id: 4,
            title: "2GUD Brand Playbook",
            description: "Comprehensive guide on the 2GUD brand identity and digital visuals.",
            year: "2019",
            backgroundColor: "bg-gradient-to-br from-red-500 to-pink-600",
            category: "Brand Playbook",
        },
    ]

    // ✅ Auto-slide for mobile interfaces
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % mobileInterfaces.length)
        }, 4000)
        return () => clearInterval(slideInterval)
    }, [mobileInterfaces.length])

    // ✅ Auto-scroll for design cards
    useEffect(() => {
        const designSlideInterval = setInterval(() => {
            setCurrentDesignSlide((prev) => prev + 1)
        }, 3000)
        return () => clearInterval(designSlideInterval)
    }, [])

    const goToSlide = (index) => setCurrentSlide(index)
    const goToDesignSlide = (index) => setCurrentDesignSlide(index)

    return (
        <section className="relative w-full py-16 md:py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
                {/* =========================================================
                   SECTION 1: MOBILE UI SHOWCASE
                ========================================================= */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[550] leading-tight">
                        A few user interfaces
                    </h2>
                </div>

                {/* ✅ Scrollable cards with snapping */}
                <div className="relative flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8">
                    {mobileInterfaces.map((ui, index) => (
                        <div
                            key={ui.id}
                            className={`flex-shrink-0 w-72 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-5 snap-center transition-transform duration-700 ${
                                index === currentSlide ? 'scale-105' : 'scale-100'
                            }`}
                        >
                            {/* UI image */}
                            <div className="rounded-2xl overflow-hidden shadow-md mb-4">
                                <img
                                    src={ui.image}
                                    alt={ui.title}
                                    className="w-full h-96 object-cover"
                                />
                            </div>

                            {/* Title + description */}
                            <h3 className="text-xl font-semibold mb-2">{ui.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{ui.description}</p>

                            {/* Button */}
                            <button
                                onClick={() => alert(`View case study for ${ui.title}`)}
                                className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                            >
                                View Case Study
                            </button>
                        </div>
                    ))}
                </div>

                {/* ✅ Slide indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {mobileInterfaces.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'bg-black'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* =========================================================
               SECTION 2: VISUAL DESIGN PORTFOLIO
            ========================================================= */}
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-[550] leading-tight mb-4">
                        A <span className="text-black">visual designer turned UX designer.</span>{' '}
                        <span className="text-gray-400">Some projects that display</span>{' '}
                        <span className="text-black">my visual prowess.</span>
                    </h3>
                </div>

                {/* ✅ Continuous auto-scrolling cards */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000 ease-linear gap-6"
                        style={{
                            transform: `translateX(-${(currentDesignSlide * 25)}%)`,
                            width: `${visualDesigns.length * 100}%`,
                        }}
                    >
                        {[...visualDesigns, ...visualDesigns, ...visualDesigns].map(
                            (design, index) => {
                                if (currentDesignSlide >= visualDesigns.length && index === 0) {
                                    setTimeout(() => setCurrentDesignSlide(0), 1000)
                                }

                                return (
                                    <div
                                        key={`${design.id}-${index}`}
                                        className="flex-shrink-0 w-80 h-96"
                                    >
                                        {/* Card background */}
                                        <div
                                            className={`w-full h-80 ${design.backgroundColor} rounded-2xl relative overflow-hidden shadow-lg mb-4`}
                                        >
                                            {/* Placeholder for image or overlay */}
                                            <div className="absolute inset-4 bg-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center">
                                                <div className="text-center text-white/70">
                                                    <p className="text-sm font-medium">
                                                        Image Placeholder
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Overlay content */}
                                            <div className="absolute top-6 left-6 text-white z-10">
                                                <div className="text-sm font-medium mb-2 bg-black/30 px-2 py-1 rounded">
                                                    {design.category}
                                                </div>
                                                <div className="text-2xl font-bold bg-black/30 px-2 py-1 rounded">
                                                    {design.title}
                                                </div>
                                            </div>

                                            {/* Year badge */}
                                            <div className="absolute bottom-6 right-6 bg-white text-black px-3 py-1 rounded-full text-sm font-medium z-10">
                                                {design.year}
                                            </div>
                                        </div>

                                        {/* Card text */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">
                                                {design.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {design.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>

                {/* ✅ Visual design indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {visualDesigns.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToDesignSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (currentDesignSlide % visualDesigns.length) === index
                                    ? 'bg-black'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
