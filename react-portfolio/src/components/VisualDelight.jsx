import React from 'react'
import Budgetly1 from '../Assets/Budgetly1.png'
import Budgetly2 from '../Assets/Budgetly2.png'
import Budgetly3 from '../Assets/Budgetly3.png'
import Budgetly4 from '../Assets/Budgetly4.png'
import Me from '../Assets/Me.jpeg'

export default function VisualDelight() {

    // ✅ UI Images for scrolling carousel
    const visualDelightImages = [
        { id: 1, image: Budgetly1, alt: "Budgetly Interface 1" },
        { id: 2, image: Budgetly2, alt: "Budgetly Interface 2" },
        { id: 3, image: Budgetly3, alt: "Budgetly Interface 3" },
        { id: 4, image: Budgetly4, alt: "Budgetly Interface 4" }
    ]

    // ✅ Load ALL images from Assets/Graphic dynamically (png/jpg/jpeg/svg)
    // This avoids importing one by one and keeps new images auto-included
    const graphicModules = import.meta.glob('../Assets/Graphic/*.{png,jpg,jpeg,svg}', { eager: true })
    const graphicImages = Object.entries(graphicModules).map(([path, mod], idx) => ({
        id: idx + 1,
        image: mod.default || mod, // Vite default export for assets
        alt: path.split('/').pop()
    }))

    // Use the same set of images for both rows to keep widths identical
    const repeatedVisual = [...graphicImages, ...graphicImages]

    // Slightly smaller thumbnails than UI carousel
    const imageMaxHeight = '220px'

    return (
        <section className="relative w-full py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* 🔹 Section Header: A few user interfaces */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-4">
                        A few user interfaces
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        A <span className="font-semibold text-black">showcase of my recent UX/UI design work.</span> <span className="text-gray-500">Some projects that display</span> <span className="font-semibold text-black">my visual prowess.</span>
                    </p>
                </div>

                {/* 🔹 Scrolling Carousel Container - UI Images */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-8 animate-scroll">
                        {/* First set and Duplicate set for seamless loop */}
                        {[...visualDelightImages, ...visualDelightImages].map((item, index) => (
                            <div
                                key={`ui-${item.id}-${index}`}
                                className="flex-shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-101"
                                    style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- */}

                {/* 🔹 Visual Design Portfolio Section */}
                <div className="mt-32">
                    {/* Section Header: Visual design projects */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[550] leading-tight mb-6">
                            Visual design projects
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            A <span className="font-semibold text-black">visual designer turned UX designer.</span> <span className="text-gray-500">Some projects that display</span> <span className="font-semibold text-black">my visual prowess.</span>
                        </p>
                    </div>

                    {/* 🔹 Two-row carousels with opposite scroll directions */}
                    <div className="space-y-6">
                        {/* Row 1 - rightward (reverse) */}
                        <div className="relative overflow-hidden">
                            <div className="flex gap-6 animate-visual-slow-reverse">
                                {repeatedVisual.map((item, index) => (
                                    <div key={`visual-r1-${item.id}-${index}`} className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-101"
                                            style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - leftward */}
                        <div className="relative overflow-hidden">
                            <div className="flex gap-6 animate-visual-slow">
                                {repeatedVisual.map((item, index) => (
                                    <div key={`visual-r2-${item.id}-${index}`} className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-101"
                                            style={{ width: 'auto', maxHeight: imageMaxHeight }}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}