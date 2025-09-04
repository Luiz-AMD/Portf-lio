Write-Host "🚀 Iniciando deploy do portfólio..." -ForegroundColor Green

# Verificar se há mudanças não commitadas
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  Há mudanças não commitadas. Commitando..." -ForegroundColor Yellow
    git add .
    git commit -m "Atualização automática - $(Get-Date)"
}

# Fazer build
Write-Host "📦 Fazendo build..." -ForegroundColor Blue
npm run build

# Fazer push para GitHub
Write-Host "📤 Fazendo push para GitHub..." -ForegroundColor Blue
git push origin main

Write-Host "✅ Deploy iniciado! Verifique o GitHub Actions para acompanhar o progresso." -ForegroundColor Green
Write-Host "🌐 Seu site estará disponível em: https://seu-usuario.github.io/seu-repositorio" -ForegroundColor Cyan





