import React from 'react'

const Projects = () => {
    return (
        <section className="py-16 px-4" aria-labelledby="projects-title">
            <div className="max-w-7xl mx-auto">
                <h2 id="projects-title" className="section-title text-center mb-12">
                    Meus Projetos
                </h2>

                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Projetos
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                        Por enquanto deixei os projetos no github, pois estou tentando aprender as melhores opções de como apresentar meus projetos de forma mais eficaz e atrativa.
                    </p>

                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Tem alguma ideia de como eu poderia apresentar meus projetos aqui?
                        </p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=luizantoniomartinsdavid219@gmail.com&su=Sugestões para Portfólio&body=Olá Luiz! Tenho algumas ideias sobre como você poderia apresentar seus projetos no portfólio:"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span className="mr-2">💡</span>
                            Enviar Sugestões
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
