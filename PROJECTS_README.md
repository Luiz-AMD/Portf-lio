# 📁 Como Adicionar Novos Projetos

Este guia explica como adicionar novos projetos ao seu portfólio usando Git.

## 🚀 Método 1: Arquivos Individuais (Recomendado)

### 1. Estrutura de Arquivos

```
public/projects/
├── project-1.json
├── project-2.json
├── project-3.json
├── project-4.json
├── template.json
└── seu-novo-projeto.json
```

### 2. Como Adicionar um Novo Projeto

#### Passo 1: Copiar o Template
```bash
# No terminal, na pasta do projeto
cp public/projects/template.json public/projects/project-5.json
```

#### Passo 2: Editar o Arquivo
```bash
# Abrir no editor
code public/projects/project-5.json
```

#### Passo 3: Personalizar o Projeto
```json
{
    "id": 5,
    "title": "Meu Jogo da Velha",
    "description": "Jogo da velha com interface moderna",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": "🎮",
    "demoUrl": "https://meu-jogo.com",
    "githubUrl": "https://github.com/seu-usuario/jogo-da-velha",
    "status": "Concluído",
    "hasCode": true,
    "code": "<!DOCTYPE html>..."
}
```

#### Passo 4: Adicionar ao Git
```bash
# Adicionar o novo arquivo
git add public/projects/project-5.json

# Fazer commit
git commit -m "Adicionado novo projeto: Jogo da Velha"

# Enviar para o GitHub
git push origin main
```

### 3. Atualizar a Lista de Projetos

Depois de adicionar um novo arquivo, você precisa atualizar a lista no componente:

**Edite o arquivo:** `src/components/Projects.jsx`

```javascript
const projectFiles = [
    '/projects/project-1.json',
    '/projects/project-2.json',
    '/projects/project-3.json',
    '/projects/project-4.json',
    '/projects/project-5.json'  // ← Adicione aqui
]
```

### 4. Script Automatizado (Opcional)

Para automatizar o processo, você pode criar um script:

**Criar arquivo:** `scripts/add-project.js`

```javascript
const fs = require('fs')
const path = require('path')

const projectId = process.argv[2]
const projectName = process.argv[3]

if (!projectId || !projectName) {
    console.log('Uso: node scripts/add-project.js <id> <nome-do-projeto>')
    process.exit(1)
}

// Copiar template
const templatePath = 'public/projects/template.json'
const newProjectPath = `public/projects/project-${projectId}.json`

fs.copyFileSync(templatePath, newProjectPath)

// Atualizar o arquivo
let content = fs.readFileSync(newProjectPath, 'utf8')
content = content.replace('"id": 5', `"id": ${projectId}`)
content = content.replace('"title": "Nome do Projeto"', `"title": "${projectName}"`)

fs.writeFileSync(newProjectPath, content)

console.log(`✅ Projeto criado: ${newProjectPath}`)
console.log(`📝 Edite o arquivo e adicione ao Git:`)
console.log(`   git add ${newProjectPath}`)
console.log(`   git commit -m "Adicionado projeto: ${projectName}"`)
console.log(`   git push origin main`)
```

**Usar o script:**
```bash
node scripts/add-project.js 5 "Meu Jogo da Velha"
```

### 1. Edite o arquivo `public/projects.json`

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Nome do Projeto",
      "description": "Descrição detalhada do projeto",
      "technologies": ["React", "Node.js", "MongoDB"],
      "image": "🚀",
      "demoUrl": "https://seu-projeto.com",
      "githubUrl": "https://github.com/seu-usuario/seu-projeto",
      "status": "Concluído",
      "hasCode": true,
      "code": "<!DOCTYPE html><html>...</html>"
    }
  ]
}
```

### 2. Campos Explicados

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `id` | number | ID único do projeto | `1` |
| `title` | string | Nome do projeto | `"E-commerce Platform"` |
| `description` | string | Descrição detalhada | `"Uma plataforma completa..."` |
| `technologies` | array | Lista de tecnologias | `["React", "Node.js"]` |
| `image` | string | Emoji ou ícone | `"🚀"` |
| `demoUrl` | string | Link para demo | `"https://demo.com"` |
| `githubUrl` | string | Link do GitHub | `"https://github.com/..."` |
| `status` | string | Status do projeto | `"Concluído"` ou `"Em desenvolvimento"` |
| `hasCode` | boolean | Se tem código para executar | `true` ou `false` |
| `code` | string | Código HTML completo | `"<!DOCTYPE html>..."` |

### 3. Exemplo Completo

```json
{
  "id": 4,
  "title": "Calculadora Avançada",
  "description": "Calculadora com interface moderna e funcionalidades avançadas",
  "technologies": ["HTML", "CSS", "JavaScript"],
  "image": "🧮",
  "demoUrl": "https://calculadora.com",
  "githubUrl": "https://github.com/seu-usuario/calculadora",
  "status": "Concluído",
  "hasCode": true,
  "code": "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Calculadora</title><style>body{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(45deg,#667eea,#764ba2)}.calculator{background:rgba(255,255,255,0.1);padding:20px;border-radius:15px;backdrop-filter:blur(10px);box-shadow:0 8px 32px rgba(0,0,0,0.3)}.display{width:100%;height:60px;border:none;background:rgba(255,255,255,0.2);color:white;font-size:24px;text-align:right;padding:10px;border-radius:10px;margin-bottom:20px}button{width:60px;height:60px;margin:5px;border:none;background:rgba(255,255,255,0.2);color:white;font-size:18px;border-radius:10px;cursor:pointer;transition:all 0.3s}button:hover{background:rgba(255,255,255,0.3);transform:scale(1.05)}.operator{background:rgba(255,165,0,0.6)}.equals{background:rgba(0,255,0,0.6)}.clear{background:rgba(255,0,0,0.6)}</style></head><body><div class=\"calculator\"><input type=\"text\" class=\"display\" id=\"display\" readonly><div style=\"display:grid;grid-template-columns:repeat(4,1fr);gap:5px\"><button class=\"clear\" onclick=\"clearDisplay()\">C</button><button onclick=\"appendToDisplay('(')\">(</button><button onclick=\"appendToDisplay(')')\">)</button><button class=\"operator\" onclick=\"appendToDisplay('/')\">/</button><button onclick=\"appendToDisplay('7')\">7</button><button onclick=\"appendToDisplay('8')\">8</button><button onclick=\"appendToDisplay('9')\">9</button><button class=\"operator\" onclick=\"appendToDisplay('*')\">×</button><button onclick=\"appendToDisplay('4')\">4</button><button onclick=\"appendToDisplay('5')\">5</button><button onclick=\"appendToDisplay('6')\">6</button><button class=\"operator\" onclick=\"appendToDisplay('-')\">-</button><button onclick=\"appendToDisplay('1')\">1</button><button onclick=\"appendToDisplay('2')\">2</button><button onclick=\"appendToDisplay('3')\">3</button><button class=\"operator\" onclick=\"appendToDisplay('+')\">+</button><button onclick=\"appendToDisplay('0')\">0</button><button onclick=\"appendToDisplay('.')\">.</button><button class=\"equals\" onclick=\"calculate()\" style=\"grid-column:span 2\">=</button></div></div><script>function appendToDisplay(value){document.getElementById('display').value+=value}function clearDisplay(){document.getElementById('display').value=''}function calculate(){try{document.getElementById('display').value=eval(document.getElementById('display').value)}catch(error){document.getElementById('display').value='Erro'}}</script></body></html>"
}
```

## 🔧 Método 2: API (Avançado)

Se você quiser uma solução mais avançada, pode criar uma API:

1. **Backend simples** (Node.js/Express)
2. **Banco de dados** (MongoDB/PostgreSQL)
3. **Interface de administração** para adicionar projetos

## 📝 Dicas para o Código HTML

### 1. Estrutura Básica
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nome do Projeto</title>
    <style>
        /* Seus estilos CSS aqui */
    </style>
</head>
<body>
    <!-- Seu conteúdo HTML aqui -->
    <script>
        // Seu JavaScript aqui
    </script>
</body>
</html>
```

### 2. Boas Práticas
- ✅ Use CSS inline ou `<style>` tags
- ✅ Inclua JavaScript inline ou `<script>` tags
- ✅ Mantenha o código completo e funcional
- ✅ Teste o código antes de adicionar
- ✅ Use design responsivo
- ✅ Mantenha o código limpo e organizado

### 3. Limitações
- ❌ Não use recursos externos (CDNs, imagens externas)
- ❌ Não use APIs externas que precisem de chaves
- ❌ Evite arquivos muito grandes (>100KB)

## 🎨 Emojis Sugeridos por Categoria

| Categoria | Emojis |
|-----------|--------|
| Web Apps | 🌐 🚀 💻 |
| Mobile Apps | 📱 📲 |
| Games | 🎮 🕹️ |
| Tools | 🛠️ ⚙️ |
| Design | 🎨 🎭 |
| Data | 📊 📈 |
| E-commerce | 🛒 💳 |
| Social | 👥 💬 |

## 🔄 Atualização Automática

O site carrega automaticamente os projetos do arquivo JSON quando:
- A página é carregada
- O arquivo `projects.json` é modificado (após refresh)

## 🚀 Deploy

Após adicionar novos projetos:

1. **Teste localmente** primeiro
2. **Faça commit** das mudanças
3. **Deploy** para seu servidor
4. **Verifique** se os projetos aparecem corretamente

## 📞 Suporte

Se tiver dúvidas ou problemas:
- Verifique a sintaxe JSON
- Teste o código HTML separadamente
- Confirme se todos os campos obrigatórios estão preenchidos
