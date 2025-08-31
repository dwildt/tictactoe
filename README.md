# 🎮 Jogo da Velha - Wildtech

Um jogo da velha moderno e responsivo desenvolvido com JavaScript vanilla, seguindo a metodologia **Atomic Design** e usando as cores oficiais da Wildtech.

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
- 🧩 **Atomic Design**: Arquitetura baseada em componentes reutilizáveis

## 🌐 Jogar Online

🎮 **[Jogar agora no GitHub Pages](https://dwildt.github.io/tictactoe)**

Acesse diretamente sem precisar fazer download ou configurar servidor local!

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com arquitetura Atomic Design
- **CSS3**: Estilização modular com Design Tokens e BEM methodology
- **JavaScript ES6+**: Lógica do jogo com classes e métodos modernos
- **Atomic Design**: Metodologia para criação de sistemas de design escaláveis
- **Design Tokens**: Variáveis CSS para consistência visual
- **Sistema i18n**: Traduções em arquivo JSON separado
- **Jest**: Framework de testes unitários
- **Fetch API**: Carregamento assíncrono de traduções

## 🎨 Design System

### Cores da Wildtech
- **Laranja**: `#ff7b00` - Cor principal para elementos de destaque
- **Marrom**: `#8b4513` - Cor secundária para contraste e elegância

### Arquitetura Atomic Design
O projeto segue os princípios do Atomic Design com componentes organizados em:
- **⚛️ Atoms**: Botões, inputs, labels, células
- **🧬 Molecules**: Seletor de idioma, placar, controles de jogo
- **🦠 Organisms**: Header, tabuleiro, footer
- **📄 Templates**: Layout principal da página
- **🌐 Pages**: Estados específicos (loading, jogo ativo)

📖 **[Ver documentação completa do Atomic Design](ATOMIC_DESIGN.md)**

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
# Usando npm scripts (recomendado)
npm start              # Inicia servidor na porta 3001
npm run dev            # Inicia servidor e abre navegador automaticamente

# Métodos alternativos
python3 -m http.server 8000    # Usando Python 3
npx http-server -p 8000        # Usando Node.js diretamente
php -S localhost:8000          # Usando PHP
```

4. Acesse: `http://localhost:3001` (com npm) ou `http://localhost:8000` (outros métodos)

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

## 🧪 Desenvolvimento e Qualidade de Código

O projeto inclui ferramentas abrangentes para manter a qualidade do código:

### Testes Unitários (Jest)

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (reexecuta quando arquivos mudam)
npm run test:watch

# Executar testes com relatório de cobertura
npm run test:coverage
```

### Linting (ESLint)

```bash
# Verificar problemas de código
npm run lint

# Corrigir problemas automaticamente
npm run lint:fix
```

### Verificação Completa (Lint + Testes)

```bash
# Executa lint e testes em sequência
npm run check

# Executa correção automática e testes
npm run check:fix
```
npm run test:coverage
```

### Cobertura de Testes

Os testes cobrem:
- ✅ **Estrutura das traduções**: Validação do JSON
- ✅ **Completude**: Todas as chaves necessárias presentes
- ✅ **Consistência**: Padrões entre idiomas
- ✅ **Qualidade**: Textos válidos e sem duplicação
- ✅ **Integridade**: Caracteres especiais e tamanhos
- ✅ **Componentes**: Validação da estrutura Atomic Design

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

## 🏗️ Arquitetura do Projeto

### Estrutura de Arquivos
```
tictactoe/
├── index.html              # Template principal com estrutura Atomic Design
├── styles.css              # CSS organizado por atoms, molecules, organisms
├── script.js               # Lógica do jogo com classes ES6+
├── translations.json       # Sistema de internacionalização
├── tests/
│   ├── setup.js           # Configuração do ambiente de testes
│   └── translations.test.js # Testes de validação das traduções
├── ATOMIC_DESIGN.md        # Documentação da arquitetura de componentes
├── TRANSLATION_GUIDE.md    # Guia para tradutores
├── CLAUDE.md              # Guia para Claude Code
└── README.md              # Este arquivo
```

### Princípios de Design
- **Component-Based**: Cada elemento é um componente reutilizável
- **Mobile-First**: Design responsivo começando pelo mobile
- **Accessible**: Estrutura semântica e navegação por teclado
- **Performant**: CSS otimizado e JavaScript vanilla
- **Maintainable**: Código organizado e bem documentado

## 📚 Documentação Adicional

- **[🧩 Atomic Design](ATOMIC_DESIGN.md)**: Arquitetura de componentes detalhada
- **[🌍 Translation Guide](TRANSLATION_GUIDE.md)**: Guia completo para tradutores
- **[🤖 Claude.md](CLAUDE.md)**: Orientações para desenvolvimento com Claude Code

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

Contribuições são bem-vindas! Para manter a qualidade do código, siga estas diretrizes:

### 🔍 Processo de Contribuição

1. **Fork do projeto**
2. **Criar uma branch para sua feature** (`git checkout -b feature/AmazingFeature`)
3. **Instalar dependências** (`npm install`)
4. **Fazer suas alterações**
5. **Verificar qualidade do código** (`npm run check`)
6. **Corrigir problemas** (`npm run check:fix` se necessário)
7. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
8. **Push para a branch** (`git push origin feature/AmazingFeature`)
9. **Abrir um Pull Request**

### ✅ Garantia de Qualidade

- **Testes automáticos**: Todos os PRs são verificados via GitHub Actions
- **Linting**: ESLint garante consistência do código
- **Cobertura**: Testes unitários validam funcionalidades
- **CI/CD**: Workflow automatizado para Node.js 18.x e 20.x

### 🛠️ Ferramentas de Desenvolvimento

- **Copilot & Claude Code**: Projeto preparado para assistentes de IA
- **Atomic Design**: Arquitetura de componentes bem estruturada
- **Jest**: Framework de testes robusto
- **ESLint**: Padronização de código

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