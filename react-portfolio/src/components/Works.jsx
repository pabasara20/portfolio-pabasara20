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
            image: W1,
            links: {
                github: "#", // Add correct path later
                linkedin: "#", // Add correct path later
                figma: "#" // Add correct path later
            }
        },
        {
            id: 102,
            title: "Reducing the bounce rate and increasing the repeat visits",
            tags: ["B2C", "Loyalty program", "Merchandising"],
            subtitle: "An analysis of how I mitigated the bounce rate by creating a fully new user experience",
            altText: "Flipkart SuperCoin Loyalty Program",
            image: W1,
            links: {
                github: "#", // Add correct path later
                linkedin: "#", // Add correct path later
                figma: "#" // Add correct path later
            }
        },
        {
            id: 103,
            title: "Enhancing product discovery experience",
            tags: ["B2C", "E-commerce"],
            subtitle: "A comprehensive redesign focusing on improving user trust and product discovery flows",
            altText: "2GUD by Flipkart Redesign",
            image: W1,
            links: {
                github: "#", // Add correct path later
                linkedin: "#", // Add correct path later
                figma: "#" // Add correct path later
            }
        },
        {
            id: 104,
            title: "Building video commerce experience",
            tags: ["B2C", "Video Platform"],
            subtitle: "Creating an engaging video-first shopping experience to increase user engagement and conversions",
            altText: "Flipkart Video Entertainment",
            image: W1,
            links: {
                github: "#", // Add correct path later
                linkedin: "#", // Add correct path later
                figma: "#" // Add correct path later
            }
        }
    ]

    return (
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
                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                {project.subtitle}
                            </p>

                            {/* 🔹 Social Media Links */}
                            <div className="flex gap-3">
                                {/* GitHub Button */}
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-100 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                                    title="View on GitHub"
                                >
                                    <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>

                                {/* LinkedIn Button */}
                                <a
                                    href={project.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                                    title="View on LinkedIn"
                                >
                                    <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>

                                {/* Figma Button */}
                                <a
                                    href={project.links.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-100 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group/btn"
                                    title="View on Figma"
                                >
                                    <svg className="w-4 h-4 text-gray-700 group-hover/btn:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.49 0 4.515 2.014 4.515 4.49S10.662 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019zM19.581 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
