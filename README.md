# 🎮 Jogo da Velha - Wildtech

Um jogo da velha moderno e responsivo desenvolvido com JavaScript vanilla, usando as cores oficiais da Wildtech.

## 🌟 Características

- ✅ **Multiplayer Local**: Jogue X vs O no mesmo dispositivo
- 🎯 **Múltiplos Modos de Jogo**: 
  - Simples (uma partida)
  - Melhor de 3
  - Melhor de 5
- 🌍 **Multi-idioma**: Português, Inglês e Espanhol
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- 🎨 **Visual Moderno**: Usando as cores oficiais da Wildtech
- 📊 **Sistema de Pontuação**: Controle de vitórias com reset
- ✨ **Animações**: Efeitos visuais para melhor experiência

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com cores da Wildtech e design responsivo
- **JavaScript ES6+**: Lógica do jogo com classes e métodos modernos
- **Sistema i18n**: Traduções em arquivo JSON separado
- **Jest**: Framework de testes unitários
- **Fetch API**: Carregamento assíncrono de traduções

## 🎨 Cores da Wildtech

- **Laranja**: `#ff7b00` - Cor principal para elementos de destaque
- **Marrom**: `#8b4513` - Cor secundária para contraste e elegância

## 🚀 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/dwildt/tictactoe.git
cd tictactoe
```

2. Instale as dependências para testes:
```bash
npm install
```

3. **Execute com servidor local** (necessário para carregar traduções):
```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js
npx http-server

# Usando PHP  
php -S localhost:8000
```

4. Acesse: `http://localhost:8000`

### ⚠️ Nota Importante
O jogo precisa de servidor local para carregar o arquivo `translations.json` devido às políticas CORS dos navegadores.

### Como Jogar

1. **Selecione o Idioma**: Use o seletor no cabeçalho
2. **Escolha o Modo de Jogo**: 
   - **Simples**: Uma partida por vez
   - **Melhor de 3**: Primeiro a ganhar 2 partidas
   - **Melhor de 5**: Primeiro a ganhar 3 partidas
3. **Faça sua Jogada**: Clique numa célula vazia para jogar
4. **Acompanhe o Placar**: Veja as vitórias de cada jogador
5. **Reinicie**: Use os botões para reiniciar o jogo ou zerar o placar

## 🧪 Executar Testes

O projeto inclui testes unitários abrangentes usando Jest:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (reexecuta quando arquivos mudam)
npm run test:watch

# Executar testes com relatório de cobertura
npm run test:coverage
```

### Cobertura de Testes

Os testes cobrem:
- ✅ **Estrutura das traduções**: Validação do JSON
- ✅ **Completude**: Todas as chaves necessárias presentes
- ✅ **Consistência**: Padrões entre idiomas
- ✅ **Qualidade**: Textos válidos e sem duplicação
- ✅ **Integridade**: Caracteres especiais e tamanhos

## 📱 Responsividade

O jogo foi desenvolvido com abordagem mobile-first e funciona perfeitamente em:

- 📱 **Smartphones**: Layout otimizado para telas pequenas
- 📟 **Tablets**: Aproveitamento do espaço intermediário  
- 💻 **Desktop**: Interface completa com todos os recursos

### Breakpoints

- **Mobile**: até 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px+

## 🌍 Idiomas Suportados

- 🇧🇷 **Português**: Idioma padrão
- 🇺🇸 **English**: Tradução completa
- 🇪🇸 **Español**: Tradução completa

O sistema usa arquivo JSON separado (`translations.json`) facilitando o trabalho de tradutores. 

### 📖 Para Tradutores
- **Arquivo principal**: `translations.json` (apenas este arquivo)
- **Guia completo**: [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md)
- **Sem código**: Tradutores trabalham apenas com texto
- **Fácil manutenção**: Adição de idiomas sem afetar o código

## 🤝 Como Apoiar

Este projeto é mantido como código aberto. Se você achou útil, considere apoiar:

### GitHub Sponsors
⭐ **Principal**: [Apoie via GitHub Sponsors](https://github.com/sponsors/dwildt)

### Outras formas de apoiar:
- ⭐ Dê uma estrela no repositório
- 🐛 Reporte bugs ou sugira melhorias
- 🔀 Contribua com código
- 📢 Compartilhe o projeto

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

- 🐛 [Abra uma issue](https://github.com/dwildt/tictactoe/issues)

---

<div align="center">
  <p>Desenvolvido com ❤️ usando as cores da Wildtech</p>
  <p>
    <a href="https://github.com/sponsors/dwildt">
      ⭐ Apoie este projeto
    </a>
  </p>
</div>