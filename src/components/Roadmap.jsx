import React from 'react'

const Roadmap = () => {
    return (
        <section className="py-16 animate-slide-up">
            <h2 className="section-title"> Meu mapa de Desenvolvimento</h2>
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Linha do tempo */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 via-indigo-500"></div>

                    {/* Fase Atual */}
                    <div className="relative flex items-center mb-12">
                        <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        <div className="ml-16">
                            <div className="card p-6">
                                <div className="flex items-center mb-3">

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Fase Atual</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Estou focado em solidificar minhas bases e expandir para full-stack
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">HTML & CSS Avançado</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Concluído</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript & React</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Git & GitHub basico</span>
                                        <span className="text-sm text-green-600 dark:text-green-400"> Concluído</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">APIs REST</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Base de Dados SQL</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Next.js</span>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">Em andamento</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Próxima Fase */}
                    <div className="relative flex items-center mb-12">
                        <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        <div className="ml-16">
                            <div className="card p-6">
                                <div className="flex items-center mb-3">

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Próxima Fase</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Aprofundar ferramentas essenciais para o mercado
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Git Avançado & Workflows</span>
                                        <span className="text-sm text-purple-600 dark:text-purple-400">Em lista de estudo</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Backend & APIs</span>
                                        <span className="text-sm text-purple-600 dark:text-purple-400">Em lista de estudo</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Banco de Dados</span>
                                        <span className="text-sm text-purple-600 dark:text-purple-400">Em lista de estudo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fase Futura */}
                    <div className="relative flex items-center mb-12">
                        <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        <div className="ml-16">
                            <div className="card p-6">
                                <div className="flex items-center mb-3">

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Fase Futura</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Expandir para desenvolvimento full-stack e cloud
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                                        <span className="text-sm text-green-600 dark:text-green-400">Futuro</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Docker & AWS</span>
                                        <span className="text-sm text-green-600 dark:text-green-400">Futuro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Níveis Avançados */}
                    <div className="relative flex items-center mb-12">
                        <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        <div className="ml-16">
                            <div className="card p-6">
                                <div className="flex items-center mb-3">

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Níveis Avançados</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Especialização e liderança técnica
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Arquitetura de Software</span>
                                        <span className="text-sm text-indigo-600 dark:text-indigo-400">Especialização</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Lead / DevOps</span>
                                        <span className="text-sm text-indigo-600 dark:text-indigo-400">Liderança</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta de visão */}
                    <div className="relative flex items-center">
                        <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        <div className="ml-16">
                            <div className="card p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700">
                                <div className="flex items-center mb-3">

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Meta para minha carreira</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Desenvolvedor full-stack completo com mentalidade de crescimento contínuo
                                </p>
                                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                                    <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                                        Objetivo: Nunca parar de aprender e evoluir na tecnologia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap
