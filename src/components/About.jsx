import React from 'react'

const About = () => {
    return (
        <section className="py-16" aria-labelledby="about-title">
            <h2 id="about-title" className="section-title">Sobre Mim</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                <article className="lg:col-span-2 space-y-6 slide-in-left">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação.
                        Tenho experiência em desenvolvimento web, com foco em Front-end.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Minha jornada na programação começou atraves de uma indicação de um amigo, a qual me gerou curiosidade em conhecer mais sobre o assunto.
                        Desde entâo venho me aperfeiçoando em diversas tecnologias, como: HTML, CSS, JavaScript, React, entre outras.
                        Atualmente estou estudando JavaScript, React e APIs REST através de um curso na Udemy para expandir minhas habilidades para o desenvolvimento full-stack.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Acredito que a tecnologia tem o poder de transformar vidas e
                        estou sempre em busca de aprender novas tecnologias e metodologias.
                    </p>
                </article>
                <aside className="space-y-6 slide-in-right" aria-label="Estatísticas profissionais">
                    
                    <div className="card p-8 text-center scale-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-4xl font-bold gradient-text mb-2" aria-label="10 ou mais projetos concluídos">10+</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Projetos Concluídos</p>
                    </div>
                    <div className="card p-8 text-center scale-in" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-4xl font-bold gradient-text mb-2" aria-label="5 ou mais tecnologias dominadas">5+</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Tecnologias Dominadas</p>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default About
