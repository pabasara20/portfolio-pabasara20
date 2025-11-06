import React, { useState } from 'react'
import Budgetly1 from '../Assets/Budgetly1.png'
import Budgetly2 from '../Assets/Budgetly2.png'
import Budgetly3 from '../Assets/Budgetly3.png'
import Budgetly4 from '../Assets/Budgetly4.png'
import Me from '../Assets/Me.jpeg'

export default function VisualDelight() {
    const [currentSlide, setCurrentSlide] = useState(0)

    // ✅ Visual Delight images for scrolling carousel
    const visualDelightImages = [
        { id: 1, image: Budgetly1, alt: "Budgetly Interface 1" },
        { id: 2, image: Budgetly2, alt: "Budgetly Interface 2" },
        { id: 3, image: Budgetly3, alt: "Budgetly Interface 3" },
        { id: 4, image: Budgetly4, alt: "Budgetly Interface 4" }
    ]

    // ✅ Visual Design Portfolio cards - Extended with 12 slots
    const visualDesignCards = [
        {
            id: 1,
            title: "Shopsy Mela Visuals",
            description: "Festival campaign designs for e-commerce platform branding",
            image: Me,
            year: "2024",
            category: "Branding & Key Visual",
            bgColor: "bg-gradient-to-br from-blue-600 to-purple-700"
        },
        {
            id: 2,
            title: "Campaign Designs",
            description: "Marketing campaigns with vibrant visual storytelling approach",
            image: Me,
            year: "2023",
            category: "Campaign Design",
            bgColor: "bg-gradient-to-br from-purple-600 to-blue-600"
        },
        {
            id: 3,
            title: "Shopsy Brand Playbook",
            description: "Complete brand guidelines for consistent visual identity",
            image: Me,
            year: "2022",
            category: "Brand Guidelines",
            bgColor: "bg-gradient-to-br from-green-400 to-blue-500"
        },
        {
            id: 4,
            title: "2GUD Brand Playbook",
            description: "Strategic brand framework for marketplace platform launch",
            image: Me,
            year: "2019",
            category: "Brand Strategy",
            bgColor: "bg-gradient-to-br from-red-500 to-pink-600"
        },
        {
            id: 5,
            title: "E-commerce Banners",
            description: "Promotional banner designs for seasonal sales campaigns",
            image: Me,
            year: "2023",
            category: "Digital Marketing",
            bgColor: "bg-gradient-to-br from-orange-500 to-yellow-500"
        },
        {
            id: 6,
            title: "App Icon Design",
            description: "Mobile application icon and branding visual identity",
            image: Me,
            year: "2022",
            category: "App Design",
            bgColor: "bg-gradient-to-br from-indigo-600 to-cyan-500"
        },
        {
            id: 7,
            title: "Social Media Kit",
            description: "Instagram and Facebook visual content template designs",
            image: Me,
            year: "2024",
            category: "Social Media",
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
        },
        {
            id: 8,
            title: "Product Packaging",
            description: "Physical product packaging and label design concepts",
            image: Me,
            year: "2021",
            category: "Packaging Design",
            bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
        },
        {
            id: 9,
            title: "Web Illustrations",
            description: "Custom illustrations for landing pages and websites",
            image: Me,
            year: "2023",
            category: "Illustration",
            bgColor: "bg-gradient-to-br from-violet-600 to-purple-500"
        },
        {
            id: 10,
            title: "Print Campaigns",
            description: "Magazine ads and outdoor billboard design concepts",
            image: Me,
            year: "2020",
            category: "Print Design",
            bgColor: "bg-gradient-to-br from-amber-500 to-orange-600"
        },
        {
            id: 11,
            title: "Logo Design",
            description: "Brand identity and logo design for startups",
            image: Me,
            year: "2022",
            category: "Brand Identity",
            bgColor: "bg-gradient-to-br from-sky-500 to-blue-600"
        },
        {
            id: 12,
            title: "Motion Graphics",
            description: "Animated graphics for digital marketing campaigns",
            image: Me,
            year: "2024",
            category: "Animation",
            bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-500"
        }
    ]

    // Calculate slides - 4 cards per slide
    const cardsPerSlide = 4
    const totalSlides = Math.ceil(visualDesignCards.length / cardsPerSlide)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    // Get current slide cards
    const getCurrentSlideCards = () => {
        const startIndex = currentSlide * cardsPerSlide
        return visualDesignCards.slice(startIndex, startIndex + cardsPerSlide)
    }

    return (
        <section className="relative w-full py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* 🔹 Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-4">
                        A few user interfaces
                    </h2>

                </div>

                {/* 🔹 Scrolling Carousel Container */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-8 animate-scroll">
                        {/* First set of images */}
                        {visualDelightImages.map((item) => (
                            <div
                                key={`first-${item.id}`}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-auto object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    style={{ width: 'auto', maxHeight: '350px' }}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {visualDelightImages.map((item) => (
                            <div
                                key={`second-${item.id}`}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-auto object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    style={{ width: 'auto', maxHeight: '350px' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔹 Visual Design Portfolio Section */}
                <div className="mt-32">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-6">
                            Visual design projects
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            A <span className="font-semibold text-black">visual designer turned UX designer.</span> <span className="text-gray-500">Some projects that display</span> <span className="font-semibold text-black">my visual prowess.</span>
                        </p>
                    </div>

                    {/* Slider Container */}
                    <div className="relative max-w-7xl mx-auto">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Cards Grid - Always show 4 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
                            {getCurrentSlideCards().map((card) => (
                                <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    {/* Card Image with Full Me.jpeg */}
                                    <div className={`${card.bgColor} relative h-48 overflow-hidden`}>
                                        {/* Category tag */}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full z-10">
                                            <span className="text-xs font-medium text-white">{card.category}</span>
                                        </div>

                                        {/* Year badge */}
                                        <div className="absolute top-4 right-4 text-white z-10">
                                            <div className="text-right">
                                                <div className="text-xs opacity-80">Brand</div>
                                                <div className="text-sm font-medium">{card.year}</div>
                                            </div>
                                        </div>

                                        {/* Full Me.jpeg Image as Background */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-[550] text-black mb-2 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-black w-8'
                                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Slide Counter */}
                        <div className="text-center mt-4 text-sm text-gray-500">
                            {currentSlide + 1} of {totalSlides}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}