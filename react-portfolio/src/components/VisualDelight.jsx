import React, { useState } from 'react'
import Budgetly1 from '../Assets/Budgetly1.png'
import Budgetly2 from '../Assets/Budgetly2.png'
import Budgetly3 from '../Assets/Budgetly3.png'
import Budgetly4 from '../Assets/Budgetly4.png'
import Me from '../Assets/Me.jpeg'

// Import slots for future visual design images
import VisualDesign1 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign2 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign3 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign4 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign5 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign6 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign7 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign8 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign9 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign10 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign11 from '../Assets/Me.jpeg' // Replace with actual image later
import VisualDesign12 from '../Assets/Me.jpeg' // Replace with actual image later

export default function VisualDelight() {
    // ✅ Visual Delight images for scrolling carousel
    const visualDelightImages = [
        { id: 1, image: Budgetly1, alt: "Budgetly Interface 1" },
        { id: 2, image: Budgetly2, alt: "Budgetly Interface 2" },
        { id: 3, image: Budgetly3, alt: "Budgetly Interface 3" },
        { id: 4, image: Budgetly4, alt: "Budgetly Interface 4" }
    ]

    // ✅ Visual Design Portfolio cards - Only 4 cards needed
    const visualDesignCards = [
        {
            id: 1,
            title: "Shopsy Mela Visuals",
            description: "Festival campaign designs for e-commerce platform branding",
            image: VisualDesign1,
            year: "2024",
            category: "Branding & Key Visual",
            bgColor: "bg-gradient-to-br from-blue-600 to-purple-700",
            link: "https://example.com/shopsy-mela"
        },
        {
            id: 2,
            title: "Campaign Designs",
            description: "Marketing campaigns with vibrant visual storytelling approach",
            image: VisualDesign2,
            year: "2023",
            category: "Campaign Design",
            bgColor: "bg-gradient-to-br from-purple-600 to-blue-600",
            link: "https://example.com/campaign-designs"
        },
        {
            id: 3,
            title: "Shopsy Brand Playbook",
            description: "Complete brand guidelines for consistent visual identity",
            image: VisualDesign3,
            year: "2022",
            category: "Brand Guidelines",
            bgColor: "bg-gradient-to-br from-green-400 to-blue-500",
            link: "https://example.com/brand-playbook"
        },
        {
            id: 4,
            title: "2GUD Brand Playbook",
            description: "Strategic brand framework for marketplace platform launch",
            image: VisualDesign4,
            year: "2019",
            category: "Brand Strategy",
            bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
            link: "https://example.com/2gud-brand"
        }
    ]

    return (
        <section className="relative w-full py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* 🔹 Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-4">
                        A few user interfaces
                    </h2>
 <p className="text-lg md:text-xl text-gray-600">
                            A <span className="font-semibold text-black">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.</span> <span className="text-gray-500">Some projects that display</span> <span className="font-semibold text-black">my visual prowess.</span>
                        </p>
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
                                    className="h-auto object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-101"
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
                                    className="h-auto object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-101"
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

                    {/* Static Cards Grid - No Sliding */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {visualDesignCards.map((card, cardIndex) => (
                                <div
                                    key={card.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                                >
                                    {/* Card Image with Link Icon */}
                                    <div className={`${card.bgColor} relative h-48 overflow-hidden group`}>
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

                                        {/* Link Icon */}
                                        <a
                                            href={card.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-105"
                                            title="View Project"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>

                                        {/* Individual Image for each card */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover transition-transform duration-300 "
                                                loading="lazy"
                                            />
                                            {/* Gradient overlay for better text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-[550] text-black mb-2 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                                            {card.description}
                                        </p>

                                        {/* Card Link Button */}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}