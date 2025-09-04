#!/bin/bash

echo "🚀 Iniciando deploy do portfólio..."

# Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Há mudanças não commitadas. Commitando..."
    git add .
    git commit -m "Atualização automática - $(date)"
fi

# Fazer build
echo "📦 Fazendo build..."
npm run build

# Fazer push para GitHub
echo "📤 Fazendo push para GitHub..."
git push origin main

echo "✅ Deploy iniciado! Verifique o GitHub Actions para acompanhar o progresso."
echo "🌐 Seu site estará disponível em: https://seu-usuario.github.io/seu-repositorio"





