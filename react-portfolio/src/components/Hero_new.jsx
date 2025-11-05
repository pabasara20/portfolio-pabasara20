import React from 'react'
import profileImage from '../Assets/Me.jpeg'

export default function Hero() {
    return (
        <section className="text-center mt-2 md:mt-4 px-4">
            {/* Circular badge with profile image */}
            <div className="flex justify-center">
                <div className="rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-4 md:border-8 border-white shadow-lg overflow-hidden">
                    <img
                        src={profileImage}
                        alt="Pabasara Ranasinghe"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            <p className="mt-4 md:mt-6 text-sm text-gray-800 inline-flex items-center justify-center">
                <span className="name-pill">Hi I'm Pabasara <span className="ml-2">👋</span></span>
            </p>

            <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
                I craft digital products<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>and experiences
            </h1>

            <p className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-2">
                A lead UX designer based out of Bengaluru currently working with <strong className="text-gray-800">Rapido</strong>, previously at <strong className="text-gray-800">PhonePe</strong> &amp; <strong className="text-gray-800">Flipkart</strong>. I create delightful experiences that are easy to use for everyone.
            </p>
        </section>
    )
}