# 🌍 Guia de Tradução - Jogo da Velha

Este documento explica como adicionar novos idiomas ao jogo da velha sem precisar mexer no código.

## 📁 Arquivo de Traduções

Todas as traduções ficam no arquivo **`translations.json`**. Este é o **único arquivo** que tradutores precisam modificar.

## 📝 Estrutura do JSON

```json
{
  "código_do_idioma": {
    "chave": "texto_traduzido"
  }
}
```

## 🗝️ Chaves de Tradução

### Interface Principal
- **`title`**: Título do jogo
- **`gameMode`**: Label do modo de jogo
- **`simple`**: Modo simples
- **`bestOf3`**: Melhor de 3 partidas
- **`bestOf5`**: Melhor de 5 partidas

### Jogadores
- **`playerX`**: Nome do jogador X
- **`playerO`**: Nome do jogador O
- **`currentPlayerTurn`**: "Vez do jogador" ou "Player turn"

### Resultados
- **`winner`**: "Vencedor:" ou "Winner:"
- **`draw`**: "Empate!" ou "Draw!"
- **`gameWon`**: "ganhou o jogo!" ou "won the game!"
- **`seriesWon`**: "venceu a série!" ou "won the series!"

### Controles
- **`resetGame`**: Botão reiniciar jogo
- **`resetScore`**: Botão zerar placar

### Timer Automático
- **`startingNewGame`**: "Iniciando novo jogo em" ou "Starting new game in"
- **`seconds`**: "segundos" ou "seconds"

### Rodapé
- **`supportDev`**: "Apoie o desenvolvimento:" ou "Support development:"
- **`githubSponsors`**: "GitHub Sponsors"

## ✅ Idiomas Existentes

- **`pt`** - Português (Brasil)
- **`en`** - English (US)
- **`es`** - Español

## 🚀 Como Adicionar um Novo Idioma

### 1. Editar translations.json

Adicione um novo objeto com o código do idioma:

```json
{
  "pt": { ... },
  "en": { ... },
  "es": { ... },
  "fr": {
    "title": "Morpion",
    "gameMode": "Mode de Jeu:",
    "simple": "Simple",
    "bestOf3": "Meilleur de 3",
    "bestOf5": "Meilleur de 5",
    "playerX": "Joueur X",
    "playerO": "Joueur O",
    "currentPlayerTurn": "Tour du joueur",
    "winner": "Gagnant:",
    "draw": "Match nul!",
    "resetGame": "Recommencer",
    "resetScore": "Remettre à zéro",
    "supportDev": "Soutenir le développement:",
    "githubSponsors": "GitHub Sponsors",
    "gameWon": "a gagné la partie!",
    "seriesWon": "a gagné la série!",
    "startingNewGame": "Nouveau jeu dans",
    "seconds": "secondes"
  }
}
```

### 2. Adicionar ao Seletor de Idioma

No arquivo `index.html`, adicione a opção no select:

```html
<select id="languageSelect">
    <option value="pt">Português</option>
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option> <!-- Nova opção -->
</select>
```

## 📋 Checklist para Tradutores

- [ ] Todas as 17 chaves foram traduzidas
- [ ] Textos respeitam o contexto do jogo
- [ ] Frases ficam naturais no idioma alvo
- [ ] Não há caracteres especiais que quebram o JSON
- [ ] Arquivo JSON mantém sintaxe correta (vírgulas, aspas)

## 🔧 Testando Sua Tradução

1. Salve o arquivo `translations.json`
2. Abra o arquivo `index.html` no navegador
3. Mude o idioma no seletor
4. Teste todas as funcionalidades do jogo
5. Verifique se todos os textos estão traduzidos

## ❗ Regras Importantes

### ✅ Permitido
- Traduzir textos mantendo o sentido
- Adaptar para cultura local (ex: "Tres en Raya" em espanhol)
- Ajustar pontuação conforme idioma

### ❌ Não Permitido
- Modificar as chaves (keys) do JSON
- Alterar estrutura do arquivo
- Mexer em código JavaScript/HTML
- Remover ou adicionar chaves

## 🆘 Problemas Comuns

### Jogo não carrega
- Verifique sintaxe do JSON (aspas, vírgulas)
- Use um validador JSON online

### Textos não aparecem
- Confirme que todas as chaves estão presentes
- Verifique se o código do idioma está correto

### Caracteres estranhos
- Salve o arquivo com codificação UTF-8
- Evite caracteres de controle

## 📞 Suporte

Para dúvidas sobre tradução:
- Abra uma issue no GitHub
- Entre em contato via [GitHub Sponsors](https://github.com/sponsors/dwildt)

---

**Obrigado por ajudar a tornar o jogo acessível a mais pessoas! 🌎✨**