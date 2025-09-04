import React from 'react'

const Hero = ({ setActiveSection }) => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-8 lg:py-16 px-4 lg:px-0" aria-labelledby="hero-title">
            <div className="space-y-4 lg:space-y-6 slide-in-left order-2 lg:order-1">
                <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-100">
                    Olá, eu sou{' '}
                    <span className="gradient-text">
                        Luiz Antônio
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-medium">
                    Desenvolvedor Front-end | Designer | Criador
                </p>
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                    Olá, seja muito bem-vindo ao meu portfólio! aqui irei compartilhar meus projetos e minha jornada como desenvolvedor.
                </p>
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                    Sou apaixonado por programação e design, e estou sempre em busca de novos desafios e oportunidades para aprender e crescer.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                        onClick={() => setActiveSection('about')}
                        className="btn btn-primary glow-effect"
                        aria-label="Ver mais sobre mim"
                    >
                        Ver mais sobre mim
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className="btn btn-secondary"
                        aria-label="Entrar em contato"
                    >
                        Fale Comigo
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center slide-in-right order-1 lg:order-2 mb-8 lg:mb-0">
                <img
                    src="/src/assets/img/foto perfil.jpg"
                    alt="Foto de Luiz Antônio"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600 floating image-hover shadow-lg"
                />
            </div>
        </section>
    )
}
export default Hero
