import React from 'react';
import W1 from '../Assets/W1.png';
import W2 from '../Assets/W2.png';
import W3 from '../Assets/W3.png';
import W4 from '../Assets/W4.png';

// --- (Tech Stack Logos - Simplified/Neutralized) ---
// Using a neutral color and smaller size for a professional look
const TechIcon = ({ name }) => (
    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Placeholder SVG - Replace with actual imported, single-color logos */}
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" fillOpacity="0.1" />
        <text x="12" y="16" fontSize="10" textAnchor="middle" fill="currentColor" fontWeight="bold">{name[0]}</text>
    </svg>
);
// --- (End: Tech Stack Logos) ---

export default function Works() {

    // ✅ Projects data — using the updated structure
    const archiveProjects = [
        {
            id: 101,
            title: "A Smart Mobile Ticketing Platform for Domino's Sri Lanka Maintenance Operations",
            role: ["UI/UX Designer", "Full Stack Developer"],
            techUsed: ["React Native", "Node.js", "MongoDB", "Figma"],
            subtitle: "A smart mobile ticketing platform for Domino’s Sri Lanka maintenance operations",
            altText: "FixPoint Mobile Ticketing App",
            image: W2,
            links: {
                github: "#",
                linkedin: "#",
                figma: "#"
            }
        },
        {
            id: 102,
            title: "Reducing the bounce rate and increasing the repeat visits",
            role: ["Product Designer", "UX Strategist"],
            techUsed: ["Figma", "Sketch", "Mixpanel"],
            subtitle: "An analysis of how I mitigated the bounce rate by creating a fully new user experience",
            altText: "Flipkart SuperCoin Loyalty Program",
            image: W2,
            links: {
                github: "#",
                linkedin: "#",
                figma: "#"
            }
        },
        {
            id: 103,
            title: "Enhancing product discovery experience",
            role: ["Lead UI/UX Designer"],
            techUsed: ["React", "Styled Components", "Adobe XD"],
            subtitle: "A comprehensive redesign focusing on improving user trust and product discovery flows",
            altText: "2GUD by Flipkart Redesign",
            image: W3,
            links: {
                github: "#",
                linkedin: "#",
                figma: "#"
            }
        },
        {
            id: 104,
            title: "Building video commerce experience",
            role: ["UX Researcher", "Product Manager"],
            techUsed: ["Android", "iOS", "AWS", "Figma"],
            subtitle: "Creating an engaging video-first shopping experience to increase user engagement and conversions",
            altText: "Flipkart Video Entertainment",
            image: W4,
            links: {
                github: "#",
                linkedin: "#",
                figma: "#"
            }
        }
    ];

    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* 🔹 Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-800"> {/* Reduced font size and weight */}
                        My Projects
                    </h2>
                </div>

                {/* 🔹 Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {archiveProjects.map((project) => (
                        <div
                            key={project.id}
                            // Simplified styling: removed 'shadow-lg', 'bg-white', 'border'
                            className="group cursor-pointer transition-transform duration-300 flex flex-col h-full"
                        >
                            {/* ✅ Project Image Section */}
                            <div className="mb-3 transition-transform duration-300 group-hover:scale-[1.02] flex-shrink-0">
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg"> {/* Slightly smaller border radius */}
                                    <img
                                        src={project.image}
                                        alt={project.altText}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow">
                                
                                {/* 🔹 Role & Tech Stack - COMBINED IN ONE LINE */}
                                <div className="flex items-center justify-between mb-2 border-b border-gray-200 pb-2">
                                    
                                    {/* Role - Kept simple and flat */}
                                    <div className="flex flex-wrap gap-x-3 text-sm text-gray-600 font-medium">
                                        {/* Use array joining for a concise, separated list */}
                                        <span className="text-gray-400 font-normal">Role:</span>
                                        {project.role.join(" / ")}
                                    </div>
                                    
                                    {/* Tech Stack Logos - Reduced size and kept simple */}
                                    <div className="flex gap-2">
                                        {project.techUsed.map((tech, techIndex) => (
                                            <div 
                                                key={techIndex} 
                                                title={tech} 
                                                // Removed shadow/background for a cleaner look
                                                className="transition-opacity hover:opacity-75 duration-200"
                                            >
                                                <TechIcon name={tech} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 🔹 Project Title - Reduced font size */}
                                <h3 className="text-lg font-bold mb-1 text-gray-800 transition-colors duration-200 line-clamp-2">
                                    {project.title}
                                </h3>

                                {/* 🔹 Project Subtitle / Description - Reduced font size */}
                                <p className="text-gray-600 text-sm leading-snug mb-3 flex-grow line-clamp-2"> {/* line-clamp-2 for reduced height */}
                                    {project.subtitle}
                                </p>

                                {/* 🔹 Social Media Links - Kept simple */}
                                <div className="flex gap-3 mt-auto pt-3">
                                    {/* Link styling is now flatter and less 'button-like' */}
                                    {/* GitHub Button */}
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 hover:text-gray-900 text-gray-500 flex items-center justify-center transition-colors duration-300"
                                        title="View on GitHub"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn Button */}
                                    <a
                                        href={project.links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 hover:text-blue-600 text-gray-500 flex items-center justify-center transition-colors duration-300"
                                        title="View on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>

                                    {/* Figma Button */}
                                    <a
                                        href={project.links.figma}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 hover:text-purple-600 text-gray-500 flex items-center justify-center transition-colors duration-300"
                                        title="View on Figma"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.49 0 4.515 2.014 4.515 4.49S10.662 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019zM19.581 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}