import React, { useState, useEffect } from 'react'
import './index.css'

// Importando o componente SEO
import SEO from './components/SEO'

// Importando os componentes
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Função para scroll suave em mobile
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Função para lidar com navegação
  const handleNavigation = (section) => {
    setActiveSection(section)

    // Se estiver em mobile, faz scroll para a seção
    if (window.innerWidth < 768) {
      scrollToSection(section)
    }
  }

  // Detectar seção ativa durante scroll (mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const sections = ['home', 'about', 'skills', 'projects', 'roadmap', 'contact']
        const headerHeight = 80

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.top <= headerHeight + 100) {
              setActiveSection(sections[i])
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Configurações SEO por seção
  const seoConfig = {

    home: {
      title: "Luiz Antônio - Desenvolvedor Front-End | Portfólio Profissional",
      description: "Desenvolvedor Front-End especializado em React, JavaScript e interfaces modernas. Portfólio com projetos inovadores e soluções web criativas.",
      keywords: "desenvolvedor front-end, react, javascript, portfolio, desenvolvimento web"
    },
    about: {
      title: "Sobre Mim - Luiz Antônio | Desenvolvedor Front-End",
      description: "Conheça minha trajetória como desenvolvedor Front-End, experiência profissional e paixão por tecnologia e design.",
      keywords: "sobre desenvolvedor, experiência profissional, carreira front-end, tecnologia"
    },
    skills: {
      title: "Habilidades Técnicas - Luiz Antônio | Front-End Developer",
      description: "Minhas habilidades técnicas em React, JavaScript, HTML, CSS, Tailwind CSS e outras tecnologias de desenvolvimento web.",
      keywords: "habilidades técnicas, react, javascript, html, css, tailwind, front-end"
    },
    projects: {
      title: "Projetos - Luiz Antônio | Portfólio de Desenvolvimento Front-End",
      description: "Portfólio de projetos em React, aplicações web responsivas e interfaces modernas. Veja meus trabalhos mais recentes.",
      keywords: "projetos react, portfolio front-end, desenvolvimento web, interfaces"
    },
    roadmap: {
      title: "Meu Trajeto - Luiz Antônio | Jornada de Desenvolvimento",
      description: "Meu trajeto de desenvolvimento profissional, mostrando minha jornada de aprendizado e planos futuros para full-stack e cloud.",
      keywords: "trajeto desenvolvimento, jornada, carreira, full-stack, cloud, node.js, docker, aws"
    },
    contact: {
      title: "Contato - Luiz Antônio | Desenvolvedor Front-End",
      description: "Entre em contato para projetos, oportunidades de trabalho ou colaborações. Disponível para freelancer e parcerias.",
      keywords: "contato desenvolvedor, freelancer, oportunidades front-end, projetos"
    }
  }

  const currentSEO = seoConfig[activeSection] || seoConfig.home

  return (
    <>
      {/* SEO Dinâmico */}
      <SEO {...currentSEO} />

      {/* Estrutura semântica principal */}
      <div className="min-h-screen flex flex-col bg-gray-900">
        {/* Header/Navigation */}
        <Header activeSection={activeSection} setActiveSection={handleNavigation} />

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" role="main">
          {/* Versão Mobile: Todos os componentes em uma página */}
          <div className="md:hidden space-y-8">
            <section id="home" aria-label="Página inicial">
              <Hero setActiveSection={handleNavigation} />
            </section>
            <section id="about" aria-label="Sobre mim">
              <About />
            </section>
            
            <section id="skills" aria-label="Habilidades técnicas">
              <Skills />
            </section>
            <section id="projects" aria-label="Projetos">
              <Projects />
            </section>
            <section id="roadmap" aria-label="Meu trajeto de desenvolvimento">
              <Roadmap />
            </section>
            <section id="contact" aria-label="Contato">
              <Contact />
            </section>
          </div>

          {/* Versão Desktop: Navegação por seções */}
          <div className="hidden md:block">
            {activeSection === 'home' && (
              <section aria-label="Página inicial">
                <Hero setActiveSection={setActiveSection} />
              </section>
            )}
            {activeSection === 'about' && (
              <section aria-label="Sobre mim" >
                <About />
              </section>
            )}
            {activeSection === 'skills' && (
              <section aria-label="Habilidades técnicas">
                <Skills />
              </section>
            )}
            {activeSection === 'projects' && (
              <section aria-label="Projetos">
                <Projects />
              </section>
            )}
            {activeSection === 'roadmap' && (
              <section aria-label="Meu trajeto de desenvolvimento">
                <Roadmap />
              </section>
            )}
            {activeSection === 'contact' && (
              <section aria-label="Contato">
                <Contact />
              </section>
            )}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
