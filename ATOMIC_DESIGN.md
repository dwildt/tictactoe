# 🧩 Arquitetura Atomic Design

Este documento descreve como o projeto foi estruturado seguindo os princípios do **Atomic Design** criado por Brad Frost.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Hierarquia dos Componentes](#hierarquia-dos-componentes)
- [Atoms (Átomos)](#atoms-átomos)
- [Molecules (Moléculas)](#molecules-moléculas)
- [Organisms (Organismos)](#organisms-organismos)
- [Templates (Modelos)](#templates-modelos)
- [Pages (Páginas)](#pages-páginas)
- [Design Tokens](#design-tokens)
- [Vantagens da Implementação](#vantagens-da-implementação)

## 🎯 Visão Geral

O **Atomic Design** é uma metodologia para criar sistemas de design consistentes e escaláveis. A abordagem divide a interface em cinco níveis hierárquicos distintos:

```
Atoms → Molecules → Organisms → Templates → Pages
```

Cada nível constrói sobre o anterior, criando uma hierarquia clara e reutilizável.

## 🏗️ Hierarquia dos Componentes

### Fluxo de Composição
```
🔹 Atoms (building blocks)
  ↓
🔸 Molecules (groups of atoms)
  ↓
🔶 Organisms (complex components)
  ↓
📄 Templates (page layouts)
  ↓
🌐 Pages (specific instances)
```

## ⚛️ Atoms (Átomos)

Os **átomos** são os blocos de construção mais básicos da interface.

### Componentes Implementados

| Componente | Classe CSS | Descrição |
|------------|------------|-----------|
| **Button** | `.btn` | Botões de ação do jogo |
| **Select** | `.select` | Seletores dropdown |
| **Label** | `.label` | Rótulos de formulário |
| **Text** | `.text` | Elementos de texto |
| **Cell** | `.cell` | Células do tabuleiro |
| **Title** | `.title` | Títulos principais |
| **Link** | `.link` | Links de navegação |
| **Score** | `.score` | Exibição de pontuação |

### Variações dos Atoms

```css
/* Button Variations */
.btn                /* Botão primário (laranja) */
.btn--secondary     /* Botão secundário (marrom) */

/* Select Variations */
.select--primary    /* Select laranja */
.select--secondary  /* Select marrom */

/* Text Variations */
.text--lg           /* Texto grande */
.text--center       /* Texto centralizado */
.text--bold         /* Texto em negrito */
.text--primary      /* Cor primária (marrom) */
.text--accent       /* Cor de destaque (laranja) */

/* Cell Variations */
.cell--x            /* Célula com X (laranja) */
.cell--o            /* Célula com O (marrom) */
.cell--winner       /* Célula vencedora (animada) */
```

## 🧬 Molecules (Moléculas)

As **moléculas** combinam dois ou mais átomos para formar componentes funcionais.

### Componentes Implementados

| Componente | Descrição | Átomos Utilizados |
|------------|-----------|-------------------|
| **Language Selector** | Seletor de idioma | `select--secondary` |
| **Game Mode** | Seletor de modo de jogo | `label--primary` + `select--primary` |
| **Player Score** | Pontuação de um jogador | `text` + `score` |
| **Score Board** | Placar completo | 2x `player-score` |
| **Game Info** | Informações do jogo atual | `text` + `game-info__status` |

### Estrutura HTML das Moléculas

```html
<!-- Molecule: Game Mode -->
<div class="game-mode">
    <label class="label label--primary">Modo de Jogo:</label>
    <select class="select select--primary">...</select>
</div>

<!-- Molecule: Player Score -->
<div class="player-score">
    <h3 class="player-score__label">Jogador X</h3>
    <span class="score">0</span>
</div>
```

## 🦠 Organisms (Organismos)

Os **organismos** são componentes complexos que combinam moléculas e átomos.

### Componentes Implementados

| Componente | Descrição | Elementos Filhos |
|------------|-----------|------------------|
| **Header** | Cabeçalho da página | `title` + `language-selector` |
| **Game Board** | Tabuleiro do jogo | 9x `cell` |
| **Game Controls** | Controles do jogo | `game-mode` + `score-board` |
| **Footer** | Rodapé da página | `text` + `link` |

### Estrutura dos Organismos

```html
<!-- Organism: Header -->
<header class="header">
    <h1 class="title">Jogo da Velha</h1>
    <div class="language-selector">...</div>
</header>

<!-- Organism: Game Board -->
<div class="game-board">
    <div class="cell" data-cell="0"></div>
    <!-- ... 8 more cells ... -->
</div>
```

## 📄 Templates (Modelos)

Os **templates** definem a estrutura e layout das páginas.

### Templates Implementados

| Template | Classe CSS | Descrição |
|----------|------------|-----------|
| **Main Container** | `.container` | Container principal da aplicação |
| **Main Content** | `.main` | Área de conteúdo principal |

### Estrutura do Template

```html
<div class="container">
    <header class="header">...</header>
    <main class="main">...</main>
    <footer class="footer">...</footer>
</div>
```

## 🌐 Pages (Páginas)

As **páginas** são instâncias específicas dos templates com conteúdo real.

### Estados da Página

| Estado | Classe CSS | Descrição |
|--------|------------|-----------|
| **Loading** | `.loading` | Estado de carregamento |
| **Game Active** | - | Estado normal do jogo |

## 🎨 Design Tokens

Os **Design Tokens** são as variáveis CSS que garantem consistência visual.

### Tokens de Cor
```css
--wildtech-orange: #ff7b00;    /* Cor primária */
--wildtech-brown: #8b4513;     /* Cor secundária */
--bg-color: #f5f5f5;           /* Fundo */
--text-color: #333;            /* Texto */
--cell-bg: white;              /* Fundo das células */
```

### Tokens de Espaçamento
```css
--space-xs: 5px;
--space-sm: 10px;
--space-md: 15px;
--space-lg: 20px;
--space-xl: 30px;
```

### Tokens de Tipografia
```css
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.2rem;
--font-size-xl: 1.8rem;
--font-size-2xl: 2rem;
--font-size-3xl: 2.5rem;
```

### Tokens de Bordas e Sombras
```css
--radius-sm: 5px;
--radius-md: 10px;
--shadow-sm: 0 2px 10px rgba(0,0,0,0.1);
--shadow-md: 0 4px 15px rgba(0,0,0,0.2);
```

## ✅ Vantagens da Implementação

### 🔄 Reutilização
- Componentes podem ser reutilizados em diferentes contextos
- Facilita manutenção e consistência visual

### 📱 Responsividade
- Design tokens facilitam ajustes responsive
- Componentes se adaptam a diferentes tamanhos de tela

### 🧪 Testabilidade
- Componentes isolados são mais fáceis de testar
- Cada nível pode ser testado independentemente

### 🔧 Manutenibilidade
- Mudanças em design tokens afetam toda a aplicação
- Código organizado e fácil de localizar

### 📈 Escalabilidade
- Novos componentes seguem padrões estabelecidos
- Fácil adição de novos recursos

### 🎨 Consistência
- Design system unificado
- Experiência de usuário coesa

## 📝 Convenções de Nomenclatura

### Classes CSS
- **Atoms**: `.component` (ex: `.btn`, `.cell`)
- **Molecules**: `.component` (ex: `.game-mode`, `.score-board`)
- **Organisms**: `.component` (ex: `.header`, `.game-board`)
- **Modifiers**: `.component--modifier` (ex: `.btn--secondary`)
- **Elements**: `.component__element` (ex: `.player-score__label`)

### Comentários no CSS
```css
/* ==============================================
   ATOMS - Basic Building Blocks
   ============================================== */

/* Atom: Button */
.btn { ... }
```

### Comentários no HTML
```html
<!-- ORGANISM: Header -->
<header class="header">
    <!-- ATOM: Title -->
    <h1 class="title">...</h1>
</header>
```

## 🚀 Próximos Passos

Para continuar evoluindo a arquitetura:

1. **Criar mais variações**: Adicionar novos modificadores para components existentes
2. **Implementar novos atoms**: Badges, icons, tooltips
3. **Expandir molecules**: Criação de formulários mais complexos
4. **Desenvolver organisms**: Modals, sidebars, navigation
5. **Documentar patterns**: Criar guia de uso para cada componente

---

*Esta documentação deve ser atualizada sempre que novos componentes forem adicionados ou modificados.*