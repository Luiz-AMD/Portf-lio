import React, { useState } from 'react'

const Header = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (section) => {
        setActiveSection(section)
        setIsMenuOpen(false) // Fecha o menu mobile ao clicar
    }

    // Função reutilizável para renderizar os itens do menu
    const renderNavItems = (isMobile = false) => {
        const navItems = [
            { id: 'home', label: 'Início' },
            { id: 'about', label: 'Sobre' },
            { id: 'skills', label: 'Habilidades' },
            { id: 'projects', label: 'Projetos' },
            { id: 'roadmap', label: 'Meu Trajeto' },
            { id: 'contact', label: 'Contato' }
        ]

        return navItems.map((item) => (
            <li key={item.id} role="none">
                <button
                    onClick={() => handleNavClick(item.id)}
                    className={isMobile
                        ? `w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                        : `nav-link ${activeSection === item.id ? 'active' : ''}`
                    }
                    role="menuitem"
                    aria-current={activeSection === item.id ? 'page' : undefined}
                >
                    {item.label}
                </button>
            </li>
        ))
    }

    return (
        <header className="bg-gray-800/95 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50 py-4 transition-colors duration-300" role="banner">
            <nav className="max-w-6xl mx-auto px-4 sm:px-8 flex justify-between items-center" role="navigation" aria-label="Navegação principal">
                <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 font-extrabold tracking-wide text-xl sm:text-2xl gradient-text">
                    DEV <span className="gradient-text">Tony</span>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8" role="menubar">
                        {renderNavItems(false)}
                    </ul>
                </div>

                {/* Botão Menu Mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        aria-label="Abrir menu de navegação"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <ul className="flex flex-col items-end py-4 px-4 space-y-2" role="menubar">
                        {renderNavItems(true)}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
