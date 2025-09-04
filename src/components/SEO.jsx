import { useEffect } from 'react'

const SEO = ({
  title = "Luiz Antônio - Desenvolvedor Front-End | Portfolio Profissional",
  description = "Desenvolvedor Front-End especializado em React, JavaScript, e interfaces modernas. Portfolio com projetos, habilidades e experiência em desenvolvimento web.",
  keywords = "desenvolvedor front-end, react, javascript, portfolio, desenvolvimento web, frontend, programador",
  type = "website"
}) => {
  useEffect(() => {
    // Atualizar título da página
    document.title = title

    // Atualizar meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.querySelector(`meta[property="${property}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('property', property)
          document.head.appendChild(meta)
        }
      }
      meta.content = content
    }

    // Meta tags básicas
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph
    updatePropertyTag('og:title', title)
    updatePropertyTag('og:description', description)
    updatePropertyTag('og:type', type)

  }, [title, description, keywords, type])

  return null
}

export default SEO
