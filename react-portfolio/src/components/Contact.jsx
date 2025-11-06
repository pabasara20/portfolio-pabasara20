import React from 'react'
import profileImage from '../Assets/Me.jpeg'

export default function Contact() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[550] leading-tight">
                        Thanks for exploring my portfolio!
                    </h2>
                </div>

                {/* Chat Interface */}
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Question Message */}
                    <div className="flex justify-end">
                        <div className="bg-gray-200 text-black px-6 py-4 rounded-3xl rounded-tr-md max-w-lg">
                            <p className="text-lg md:text-xl font-[400]">
                                Hey, how can I get in touch with you?
                            </p>
                        </div>
                    </div>

                    {/* Response Message */}
                    <div className="flex items-start gap-4">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-green-400">
                                <img
                                    src={profileImage}
                                    alt="Pabasara Ranasinghe"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Message Bubble */}
                        <div className="bg-black text-white px-6 py-4 rounded-3xl rounded-tl-md max-w-2xl">
                            <p className="text-lg md:text-xl font-[400]">
                                Hey! You can email me at{' '}
                                <a
                                    href="mailto:pabasara@gmail.com"
                                    className="underline text-white hover:text-gray-300 transition-colors"
                                >
                                    paba20sara@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-gray-200">
                    {/* Copyright */}
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-600 font-[400]">© Copyright 2025</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-6">
                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* Medium */}
                        <a
                            href="https://medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}