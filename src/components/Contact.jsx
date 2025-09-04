import React from 'react'

const Contact = () => {
    function urlWhatsApp(params) {
        const mensagem = "Olá, Luiz! Vim pelo seu portfólio e gostaria de conversar.";
        const url = "https://wa.me/5538984378357?text=" + encodeURIComponent(mensagem);
        return url;
    }
    return (
        <section className="py-16" aria-labelledby="contact-title">
            <h2 id="contact-title" className="section-title">Entre em Contato</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-16">
                <div className="space-y-8 slide-in-left">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Vamos Conversar!</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Estou sempre aberto a novas oportunidades e colaborações.
                        </p>
                    </div>
                    <address className="space-y-6 not-italic">
                        <div className="flex items-center gap-4 scale-in" style={{ animationDelay: '0.1s' }}>

                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-2xl">Email:</h4>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=luizantoniomartinsdavid219@gmail.com&su=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%20Luiz%2C%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Enviar email via Gmail"
                                >
                                    luizantoniomartinsdavid219@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 scale-in" style={{ animationDelay: '0.2s' }}>

                            <div>

                                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-2xl">Telefone:</h4>
                                <a href={urlWhatsApp()} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors inline-flex gap-3" target="_blank" rel="noopener noreferrer" aria-label="Enviar mensagem no WhatsApp">

                                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                                    </svg>
                                    (38) 98437-8357

                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 scale-in" style={{ animationDelay: '0.3s' }}>

                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-2xl">Localização:</h4>
                                <p className="text-gray-600 dark:text-gray-300">Manga MG, Brasil</p>
                                <div className="mt-3 rounded-lg overflow-hidden shadow-lg border border-gray-700 w-full max-w-xs">
                                    <iframe
                                        title="Mapa de Manga MG"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=-43.941%2C-14.765%2C-43.931%2C-14.755&amp;layer=mapnik&amp;marker=-14.760%2C-43.936"
                                        className="w-full h-40"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </address>
                    <div className="flex gap-4" role="list" aria-label="Redes sociais">
                        <div className="border-2 border-blue-600 rounded-full p-2">
                            <a
                                href="https://www.linkedin.com/in/luizamdavid/"
                                className="text-blue-600 hover:text-blue-700 transition-colors glow-effect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil no LinkedIn"
                                role="listitem"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                                </svg>
                            </a>
                        </div>
                        <div className="border-2 border-blue-600 rounded-full p-2">
                            <a
                                href="https://github.com/Luiz-AMD"
                                className="text-blue-600 hover:text-blue-700 transition-colors glow-effect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil no GitHub"
                                role="listitem"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        <div className="border-2 border-blue-600 rounded-full p-2">
                            <a
                                href="https://www.instagram.com/luiz_alla11?igsh=MXhucnBqNGw1eHZqMA=="
                                className="text-blue-600 hover:text-blue-700 transition-colors glow-effect"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil no Instagram"
                                role="listitem"
                            >

                                <svg className="w-7 h-7 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>

                            </a>
                        </div>

                    </div>

                </div>
                <div className="card p-8 slide-in-right">
                    <form className="space-y-6" aria-labelledby="contact-form-title">
                        <h3 id="contact-form-title" className="sr-only">Formulário de contato</h3>
                        <div>
                            <label htmlFor="name" className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Seu nome"
                                className="form-input"
                                required
                                aria-required="true"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="seu.email@exemplo.com"
                                className="form-input"
                                required
                                aria-required="true"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Sua mensagem..."
                                className="form-input resize-none"
                                required
                                aria-required="true"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full glow-effect" aria-label="Enviar mensagem">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
