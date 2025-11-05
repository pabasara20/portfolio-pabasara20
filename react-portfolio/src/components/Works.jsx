import React from 'react'

export default function Works() {
    const projects = [
        {
            id: 1,
            company: "rapido",
            title: "Captain",
            tags: ["UX design", "Driver App", "Mobility"],
            description: "Enhancing pick-up accuracy for riders",
            subtitle: "A case study where I improved pick-up accuracy in the driver app by using image view and street view, which helped reduce order cancellations.",
            backgroundColor: "bg-yellow-400",
            phoneContent: "map"
        },
        {
            id: 2,
            company: "Pincode",
            title: "Business",
            tags: ["B2B", "UX design", "Merchants app", "Business app"],
            description: "Helping merchants to discover variants of a product",
            subtitle: "A case study demonstrating how I helped merchants with their discovery issue and contributed to the addition of 2x products to the live catalog.",
            backgroundColor: "bg-purple-500",
            phoneContent: "barcode"
        },
        {
            id: 3,
            company: "Pincode",
            title: "Search",
            tags: ["B2C", "UX design", "Search Experience"],
            description: "Improving search through Auto-suggestion",
            subtitle: "A case study of how I used the auto-suggestion feature to enhance the search experience on the Pincode app.",
            backgroundColor: "bg-orange-400",
            phoneContent: "keyboard"
        },
        {
            id: 4,
            company: "Pincode",
            title: "Discovery",
            tags: ["B2C", "UX design", "Search Experience"],
            description: "Improving search through Auto-suggestion",
            subtitle: "A case study of how I used the auto-suggestion feature to enhance the search experience on the Pincode app.",
            backgroundColor: "bg-green-500",
            phoneContent: "search"
        }
    ]

    return (
        <section className="relative w-full">
            {/* Section Header */}
            <div className="text-center px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-5xl mx-auto">
                    Recent works that have significantly boosted business metrics
                </h2>
            </div>

            {/* Sticky Cards Container */}
            <div className="relative w-800px" style={{ height: '500vh' }}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`sticky ${project.backgroundColor} rounded-xl md:rounded-2xl lg:rounded-3xl relative overflow-hidden flex flex-col justify-between`}
                        style={{
                            top: `${80 + index * 20}px`,
                            zIndex: index + 1,
                            width: '90vw',
                            maxWidth: '1200px',
                            height: '70vh',
                            minHeight: '400px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            padding: '1.5rem'
                        }}
                    >
                        {/* Empty card content - texts removed */}
                        <div className="flex flex-col h-full relative z-10">
                            {/* Content removed as requested */}
                        </div>

                        {/* Phone Mockup */}
                        <div className="absolute right-4 md:right-8 top-8 md:top-12 z-20">
                            <div className="w-20 sm:w-32 md:w-40 lg:w-48 h-40 sm:h-64 md:h-80 lg:h-96 bg-gray-900 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl relative overflow-hidden">
                                {/* Phone Screen */}
                                <div className="absolute inset-1 bg-white rounded-lg md:rounded-xl lg:rounded-2xl">
                                    {/* Dynamic phone content based on project */}
                                    {project.phoneContent === 'map' && (
                                        <>
                                            <div className="flex justify-between items-center p-1 md:p-2 text-xs text-gray-500">
                                                <span>9:41</span>
                                                <div className="flex gap-1">
                                                    <span>📶</span>
                                                    <span>🔋</span>
                                                </div>
                                            </div>
                                            <div className="px-2 md:px-3 py-1 md:py-2 border-b border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs">☰</span>
                                                    <span className="text-xs font-medium">Go to pickup</span>
                                                </div>
                                            </div>
                                            <div className="h-24 md:h-52 lg:h-64 bg-green-100 relative">
                                                <div className="absolute top-2 md:top-4 left-2 md:left-4 w-8 md:w-16 h-8 md:h-16 bg-green-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs">📍</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {project.phoneContent === 'barcode' && (
                                        <>
                                            <div className="flex justify-between items-center p-1 md:p-2 text-xs text-gray-500">
                                                <span>23:11</span>
                                                <div className="flex gap-1">
                                                    <span>📶</span>
                                                    <span>🔋</span>
                                                </div>
                                            </div>
                                            <div className="h-32 md:h-64 bg-yellow-100 relative flex items-center justify-center">
                                                <div className="w-16 md:w-32 h-12 md:h-24 bg-yellow-400 rounded flex items-center justify-center">
                                                    <span className="text-xs">�</span>
                                                </div>
                                            </div>
                                            <div className="p-2 text-center">
                                                <span className="text-xs">Scanning for product...</span>
                                            </div>
                                        </>
                                    )}
                                    {(project.phoneContent === 'keyboard' || project.phoneContent === 'search') && (
                                        <>
                                            <div className="flex justify-between items-center p-1 md:p-2 text-xs text-gray-500">
                                                <span>9:30</span>
                                                <div className="flex gap-1">
                                                    <span>📶</span>
                                                    <span>🔋</span>
                                                </div>
                                            </div>
                                            <div className="h-20 md:h-40 bg-gray-50 relative">
                                                {project.phoneContent === 'search' && (
                                                    <div className="p-2">
                                                        <div className="space-y-1">
                                                            <div className="bg-gray-200 h-3 rounded"></div>
                                                            <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                                                            <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute bottom-2 left-2 right-2 bg-gray-100 rounded p-1">
                                                <div className="grid grid-cols-10 gap-0.5 text-xs">
                                                    {'qwertyuiop'.split('').map(key => (
                                                        <div key={key} className="bg-white p-0.5 rounded text-center">{key}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final spacing */}
            <div className="h-screen"></div>
        </section>
    )
}