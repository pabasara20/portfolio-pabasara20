import React from 'react'

export default function NavBar() {
    const items = ['About me', 'Works', 'Visual Delight', 'Experience', 'Contact']
    return (
        <header className="flex items-center justify-between py-6 px-6">
            <div className="text-gray-800 font-bold">Pabasara Ranasinghe</div>

            <nav className="mx-auto">
                <div className="nav-container">
                    <ul className="flex items-center gap-6">
                        {items.map((label) => (
                            <li key={label}>
                                {label === 'About me' ? (
                                    <button className="nav-active">
                                        {label}
                                    </button>
                                ) : (
                                    <button className="nav-item">
                                        {label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div style={{ width: 64 }}></div>
        </header>
    )
}
