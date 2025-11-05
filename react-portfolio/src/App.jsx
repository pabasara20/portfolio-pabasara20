import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

export default function App() {
    return (
        <div className="min-h-screen bg-white text-black">
            <NavBar />
            <main className="max-w-4xl mx-auto px-6 pt-12">
                <Hero />
            </main>
        </div>
    )
}
