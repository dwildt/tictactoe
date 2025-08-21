# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, responsive Tic Tac Toe game built with vanilla JavaScript using Atomic Design methodology. The game features multi-language support (Portuguese, English, Spanish) and multiple game modes (Simple, Best of 3, Best of 5). It uses Wildtech's official brand colors (orange #ff7b00 and brown #8b4513).

## Commands

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode (reruns when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Development Server
Since the game uses fetch() to load translations, it requires a local server due to CORS policies:

```bash
# Using npm scripts (recommended)
npm start              # Start server on port 3001
npm run dev            # Start server and open browser automatically

# Alternative methods
python3 -m http.server 8000    # Using Python 3
npx http-server -p 8000        # Using Node.js directly
php -S localhost:8000          # Using PHP
```

Then access: `http://localhost:3001` (with npm) or `http://localhost:8000` (other methods)

## Architecture

### Atomic Design Structure

The project follows Atomic Design principles with components organized in:

- **Atoms**: Basic building blocks (buttons, cells, labels)
- **Molecules**: Groups of atoms (score display, game controls)
- **Organisms**: Complex components (game board, header, footer)
- **Templates**: Page layouts and structure
- **Pages**: Specific instances and game states

### Core Components

- **TicTacToeGame class** (`script.js`): Main game logic handling board state, win detection, score tracking, and UI updates
- **Translation system**: Async loading of translations from JSON file with fallback support
- **Game modes**: Simple (single game), Best of 3, Best of 5 with automatic series detection

### Key Files

- `index.html`: Semantic HTML structure following atomic design
- `styles.css`: Component-based CSS with atomic design organization
- `script.js`: Game logic with component-oriented architecture
- `translations.json`: Multi-language support data
- `tests/translations.test.js`: Translation validation tests

### Game State Management

The game uses a class-based approach with:
- `board`: Array of 9 cells tracking X/O/empty states
- `currentPlayer`: Alternates between 'X' and 'O'
- `gameMode`: Controls win conditions
- `scores`: Tracks wins for each player across games
- `gameActive`: Boolean preventing moves after game ends

### Translation Architecture

- Async loading with `fetch()` from `translations.json`
- Fallback system if translations fail to load
- Dynamic UI updates when language changes
- Centralized translation keys for consistent labeling

### Testing Strategy

Tests focus on translation file integrity and component validation:
- JSON structure validation
- Required key completeness across all languages
- Content consistency and quality checks
- Component isolation and functionality tests

## Development Notes

- Game requires local server due to CORS when loading translations
- Auto-reset timer (5 seconds) between games with countdown display
- Winning cells are highlighted with CSS animations
- Mobile-first responsive design with defined breakpoints
- GitHub Pages deployment: https://dwildt.github.io/tictactoe
- Components are designed for reusability and maintainability