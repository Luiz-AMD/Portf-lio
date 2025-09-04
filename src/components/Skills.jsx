import React from 'react'

const Skills = () => {
    return (
        <section className="py-16 animate-slide-up">
            <h2 className="section-title">Minhas Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Frontend</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">React</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">JavaScript</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">HTML/CSS</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">95%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Backend</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Node.js</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Em estudo</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">APIs REST</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Em estudo</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Backend</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Em desenvolvimento</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '5%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Ferramentas</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Git</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Docker</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Não conheço</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '0%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">AWS</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Não conheço</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: '0%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
