import React from 'react'
import W1 from '../Assets/W1.png' // ✅ Example image — you can import more like W2, W3, W4 if needed

export default function Works() {

    // ✅ Projects data — each object includes image, title, tags, etc.
    const archiveProjects = [
        {
            id: 101,
            title: "Reducing the returns rate post purchase",
            tags: ["B2C", "Landing Page"],
            subtitle: "A project that provided significant insights into user perceptions of refurbished items",
            altText: "Flipkart Refurbished Landing Page",
            image: W1
        },
        {
            id: 102,
            title: "Reducing the bounce rate and increasing the repeat visits",
            tags: ["B2C", "Loyalty program", "Merchandising"],
            subtitle: "An analysis of how I mitigated the bounce rate by creating a fully new user experience",
            altText: "Flipkart SuperCoin Loyalty Program",
            image: W1
        },
        {
            id: 103,
            title: "Enhancing product discovery experience",
            tags: ["B2C", "E-commerce"],
            subtitle: "A comprehensive redesign focusing on improving user trust and product discovery flows",
            altText: "2GUD by Flipkart Redesign",
            image: W1
        },
        {
            id: 104,
            title: "Building video commerce experience",
            tags: ["B2C", "Video Platform"],
            subtitle: "Creating an engaging video-first shopping experience to increase user engagement and conversions",
            altText: "Flipkart Video Entertainment",
            image: W1
        }
    ]

    return (
        <section className="relative w-full">
            {/* =========================
                🔹 Main "My Projects" Section
               ========================= */}
            <section className="relative w-full py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-6">
                    
                    {/* 🔹 Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[550] leading-tight">
                            My Projects <span className="text-gray-400 font-normal"></span>
                        </h2>
                    </div>

                    {/* 🔹 Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {archiveProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group cursor-pointer transition-transform duration-300"
                            >
                                {/* ✅ Project Image Section */}
                                <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.03]">
                                    <img
                                        src={project.image}
                                        alt={project.altText}
                                        
                                        // 🟡 Change corner rounding here:
                                        // rounded-lg → slightly rounded
                                        // rounded-xl → moderately rounded (default)
                                        // rounded-2xl → more rounded
                                        // rounded-3xl → very rounded
                                        // rounded-none → square edges
                                        className="w-full max-w-full h-auto max-h-full object-cover rounded-2xl"
                                    />
                                </div>

                                {/* 🔹 Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full shadow-sm hover:bg-gray-200 transition-all duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 🔹 Project Title */}
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 transition-colors duration-200">
                                    {project.title}
                                </h3>

                                {/* 🔹 Project Subtitle / Description */}
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {project.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}
