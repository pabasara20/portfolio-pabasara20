import React from 'react'

export default function Hero() {
    return (
        <section className="text-center mt-8">
            {/* Circular badge with blank blue square inside */}
            <div className="flex justify-center">
                <div className="rounded-full bg-green-300 w-56 h-56 flex items-center justify-center border-4 border-black/60 shadow-lg">
                    <div className="w-28 h-28 bg-blue-400"></div>
                </div>
            </div>

            <p className="mt-6 text-sm text-gray-800 inline-flex items-center justify-center">
                <span className="name-pill">Hi I’m Pabasara <span className="ml-2">👋</span></span>
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">I craft digital products<br />and experiences</h1>

            <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
                A lead UX designer based out of Bengaluru currently working with <strong className="text-gray-800">Rapido</strong>, previously at <strong className="text-gray-800">PhonePe</strong> &amp; <strong className="text-gray-800">Flipkart</strong>. I create delightful experiences that are easy to use for everyone.
            </p>
        </section>
    )
}
