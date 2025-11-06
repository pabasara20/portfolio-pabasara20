import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import profileImage from '../Assets/mypng.png'
import suslLogo from '../Assets/susl.png'
import mcLogo from '../Assets/mc.png'

// Tech Stack PNG imports
import figmaLogo from '../Assets/Rectangle 14.png'
import illustratorLogo from '../Assets/Rectangle 15.png'
import photoshopLogo from '../Assets/Rectangle 16.png'
import jsLogo from '../Assets/Rectangle 17.png'
import reactLogo from '../Assets/Rectangle 18.png'
import analysisLogo from '../Assets/Rectangle 19.png'
import dbLeafLogo from '../Assets/Rectangle 20.png'
import flutterLogo from '../Assets/Rectangle 21.png'
import nodeLogo from '../Assets/Rectangle 22.png'

export default function About() {

    // To achieve the loop, we use a list of words and set 'loop: 0'.
    const [text] = useTypewriter({
        // The list of words. Using the same string twice ensures it re-types.
        words: ['Pabasara Ranasinghe', 'Pabasara Ranasinghe'],

        loop: 0, // Set to 0 for an infinite loop

        typeSpeed: 100, // Speed of typing (100ms per character)
        deleteSpeed: 50, // Speed of erasing

        // **This is the key:** A 30-second delay between words (after typing and before deleting).
        delaySpeed: 1000, // 30000ms = 30 seconds
    });

    return (
        <section className="py-10 md:py-6 flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 w-full">

                {/* Main Profile Section - Horizontal Layout */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl">

                        {/* Left Side - Large Profile Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-80 h-100 rounded-3xl overflow-hidden">
                                    <img
                                        src={profileImage}
                                        alt="Pabasara Ranasinghe"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Information */}
                        <div className="flex flex-col justify-center h-80">
                            <div className="space-y-4">

                                <h2 className="text-4xl md:text-4xl font-[550] text-black min-h-[50px]">
                                    <span className='text-black'>{text}</span>
                                    <Cursor
                                        cursorStyle='|'
                                        cursorColor='#7C3AED'
                                    // The cursor will blink constantly because the loop is infinite
                                    />
                                </h2>

                                <p className="text-md md:text-md text-gray-600 leading-relaxed">
                                    Hi, I'm Pabasara! A UI/UX and frontend enthusiast, studying Computing and Information Systems at <span className="font-[600] text-black">Sabaragamuwa University of Sri Lanka</span>, and a proud <span className="font-[600] text-black">Maliyadeva College </span>alumnus.
                                </p>

                                {/* School Logos */}
                                <div className="flex items-center gap-6 pt-2">
                                    {/* SUSL Logo */}
                                    <div className="w-10 h-10 rounded-xl overflow-hidden">
                                        <img
                                            src={suslLogo}
                                            alt="Sabaragamuwa University of Sri Lanka"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Mahanama College Logo */}
                                    <div className="w-10 h-10 rounded-xl overflow-hidden">
                                        <img
                                            src={mcLogo}
                                            alt="Maliyadeva College"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section with Sliding Animation */}
                <div className="mt-8 w-full">
                    <div className="text-center mb-4">
                        <h3 className="text-lg font-medium text-gray-500">Tech Stack</h3>
                    </div>

                    {/* Sliding Container - Show 8 icons at a time */}
                    <div className="overflow-hidden relative max-w-4xl mx-auto">
                        <div className="flex animate-slide space-x-6">
                            {/* First set of tech icons */}
                            <div className="flex items-center space-x-6 min-w-max">
                                {/* Figma */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={figmaLogo}
                                            alt="Figma"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Adobe Illustrator */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={illustratorLogo}
                                            alt="Adobe Illustrator"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Photoshop */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={photoshopLogo}
                                            alt="Adobe Photoshop"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* JavaScript */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={jsLogo}
                                            alt="JavaScript"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* React */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={reactLogo}
                                            alt="React"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Analysis */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={analysisLogo}
                                            alt="Analysis"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* DB Leaf */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={dbLeafLogo}
                                            alt="Database"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Flutter */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={flutterLogo}
                                            alt="Flutter"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="flex items-center space-x-6 min-w-max">
                                {/* Figma */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={figmaLogo}
                                            alt="Figma"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Adobe Illustrator */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={illustratorLogo}
                                            alt="Adobe Illustrator"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Photoshop */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={photoshopLogo}
                                            alt="Adobe Photoshop"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* JavaScript */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={jsLogo}
                                            alt="JavaScript"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* React */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={reactLogo}
                                            alt="React"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Analysis */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={analysisLogo}
                                            alt="Analysis"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* DB Leaf */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={dbLeafLogo}
                                            alt="Database"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Flutter */}
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                                        <img
                                            src={flutterLogo}
                                            alt="Flutter"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}