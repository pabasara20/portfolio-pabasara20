import React from 'react'
import profileImage from '../Assets/Me.jpeg'

export default function Hero() {
    return (
        <section className="text-center pt-24 pb-24">
            {/* Circular badge with profile image */}
            <div className="flex justify-center">
                <div className="rounded-full w-52 h-52 flex items-center justify-center border-8 border-white shadow-lg overflow-hidden">
                    <img
                        src={profileImage}
                        alt="Pabasara Ranasinghe"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

            </div>

            <p className="mt-4 text-gray-800 inline-flex items-center justify-center">
                <span className="name-pill">Hi I'm Pabasara <span className="ml-2">👋</span></span>
            </p>

            <h1 className="mt-6 md:text-5xl font-[550] leading-tight">I craft digital products<br />and experiences!</h1>

            <p className="mt-8 text-gray-400 font-[400] text-xl max-w-4xl mx-auto">
                An <strong className="text-gray-800">Intern UI/UX Designer</strong> based in <strong className="text-gray-800">Colombo</strong>, currently working on creating intuitive user experiences and transforming ideas into meaningful digital products.
            </p>
        </section>
    )
}
