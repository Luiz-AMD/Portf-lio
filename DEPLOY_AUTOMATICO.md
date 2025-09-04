# 🚀 Deploy Automático no GitHub

## ⚡ **Opção 1: GitHub Actions (Recomendado)**

### 🔧 **Configuração:**

1. **Criar repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages:**
   - Vá para Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (será criado automaticamente)
   - Save

3. **Configurar o workflow:**
   - O arquivo `.github/workflows/deploy.yml` já está configurado
   - Apenas altere `cname: seu-dominio.com` se tiver domínio próprio

### 🎯 **Como usar:**
```bash
# Sempre que quiser atualizar o site:
git add .
git commit -m "Adicionei novo projeto"
git push origin main
# ✅ O site será atualizado automaticamente!
```

---

## 🖱️ **Opção 2: Script Manual**

### **Windows (PowerShell):**
```powershell
.\deploy.ps1
```

### **Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📁 **Estrutura de Arquivos**

```
seu-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Deploy automático
├── public/
│   └── images/                 # Prints dos projetos
├── src/
│   └── components/
│       └── Projects.jsx        # Componente principal
├── deploy.sh                   # Script Linux/Mac
├── deploy.ps1                  # Script Windows
└── DEPLOY_AUTOMATICO.md        # Este arquivo
```

---

## 🔄 **Fluxo de Trabalho**

### **Para adicionar um novo projeto:**

1. **Adicionar a imagem:**
   ```bash
   # Copie o print para a pasta
   cp seu-print.png public/images/novo-projeto-print.png
   ```

2. **Editar o código:**
   - Abra `src/components/Projects.jsx`
   - Adicione o novo projeto no array `projects`

3. **Fazer deploy:**
   ```bash
   git add .
   git commit -m "Adicionei projeto: Nome do Projeto"
   git push origin main
   ```

4. **Resultado:**
   - ✅ GitHub Actions faz o build automaticamente
   - ✅ Site é atualizado em alguns minutos
   - ✅ Disponível em: `https://seu-usuario.github.io/seu-repositorio`

---

## ⚙️ **Configurações Avançadas**

### **Domínio Personalizado:**
1. Compre um domínio (ex: `meuportfolio.com`)
2. Configure DNS apontando para GitHub Pages
3. Adicione o domínio no arquivo `deploy.yml`:
   ```yaml
   cname: meuportfolio.com
   ```

### **Branch Personalizada:**
Se usar uma branch diferente de `main`:
```yaml
on:
  push:
    branches: [ sua-branch ]
```

### **Variáveis de Ambiente:**
Para projetos que precisam de API keys:
1. Vá para Settings > Secrets and variables > Actions
2. Adicione suas variáveis
3. Use no workflow:
   ```yaml
   env:
     API_KEY: ${{ secrets.API_KEY }}
   ```

---

## 🎯 **Vantagens do Deploy Automático**

✅ **Sempre atualizado** - Push = Deploy automático  
✅ **Histórico** - Cada versão fica salva  
✅ **Rollback fácil** - Volte para versão anterior  
✅ **Sem esforço** - Apenas push e pronto!  
✅ **Profissional** - Mostra que você sabe CI/CD  

---

## 🚨 **Troubleshooting**

### **Site não atualiza:**
- Verifique se o push foi para a branch `main`
- Confirme se GitHub Actions está ativo
- Aguarde alguns minutos (deploy leva tempo)

### **Erro no build:**
- Verifique os logs no GitHub Actions
- Teste localmente: `npm run build`
- Corrija erros e faça novo push

### **Imagens não aparecem:**
- Confirme se estão na pasta `public/images/`
- Verifique se o caminho está correto no código
- Teste se a imagem carrega localmente

---

## 🎉 **Resultado Final**

Após configurar, seu fluxo será:
1. **Desenvolver** → Editar código
2. **Commit** → `git add . && git commit -m "mensagem"`
3. **Push** → `git push origin main`
4. **Deploy** → Automático via GitHub Actions
5. **Site atualizado** → Disponível em alguns minutos!

**Agora você tem um portfólio profissional com deploy automático!** 🚀





