// Variável global para armazenar as traduções
let translations = {};

// Carregar traduções do arquivo JSON
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error('Não foi possível carregar as traduções');
        }
        translations = await response.json();
        return true;
    } catch (error) {
        console.error('Erro ao carregar traduções:', error);
        
        // Fallback para traduções básicas em caso de erro
        translations = {
            pt: {
                title: 'Jogo da Velha',
                currentPlayerTurn: 'Vez do jogador',
                playerX: 'Jogador X',
                playerO: 'Jogador O',
                winner: 'Vencedor:',
                draw: 'Empate!',
                gameWon: 'ganhou o jogo!',
                startingNewGame: 'Iniciando novo jogo em',
                seconds: 'segundos'
            }
        };
        return false;
    }
}

class TicTacToeGame {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameMode = 'simple';
        this.scores = { X: 0, O: 0 };
        this.gameActive = true;
        this.currentLanguage = 'pt';
        this.autoResetTimer = null;
        this.countdownInterval = null;
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateInterface();
        this.updateDisplay();
    }

    bindEvents() {
        // Células do tabuleiro
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });

        // Controles
        document.getElementById('resetGame').addEventListener('click', () => this.resetGame());
        document.getElementById('resetScore').addEventListener('click', () => this.resetScore());
        document.getElementById('gameMode').addEventListener('change', (e) => this.changeGameMode(e));
        document.getElementById('languageSelect').addEventListener('change', (e) => this.changeLanguage(e));
    }

    handleCellClick(event) {
        const cellIndex = parseInt(event.target.dataset.cell);
        
        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }

        this.board[cellIndex] = this.currentPlayer;
        event.target.textContent = this.currentPlayer;
        event.target.classList.add(this.currentPlayer.toLowerCase());

        if (this.checkWinner()) {
            this.handleGameEnd(this.currentPlayer);
        } else if (this.board.every(cell => cell !== '')) {
            this.handleGameEnd('draw');
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateDisplay();
        }
    }

    checkWinner() {
        for (let combination of this.winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.highlightWinningCells(combination);
                return true;
            }
        }
        return false;
    }

    highlightWinningCells(combination) {
        combination.forEach(index => {
            document.querySelector(`[data-cell="${index}"]`).classList.add('winner');
        });
    }

    handleGameEnd(result) {
        this.gameActive = false;
        const t = translations[this.currentLanguage];
        
        if (result === 'draw') {
            document.getElementById('gameStatus').textContent = t.draw;
            this.startAutoReset();
        } else {
            this.scores[result]++;
            const winnerText = `${t.winner} ${t['player' + result]} ${t.gameWon}`;
            document.getElementById('gameStatus').textContent = winnerText;
            
            if (this.checkSeriesWinner()) {
                const seriesWinner = this.getSeriesWinner();
                setTimeout(() => {
                    document.getElementById('gameStatus').textContent = 
                        `${t['player' + seriesWinner]} ${t.seriesWon}`;
                }, 2000);
                // Não inicia o timer automático quando a série termina
            } else {
                // Inicia timer de 5 segundos para novo jogo
                this.startAutoReset();
            }
        }
        
        this.updateScoreDisplay();
    }

    checkSeriesWinner() {
        if (this.gameMode === 'simple') return false;
        
        const targetWins = this.gameMode === 'best-of-3' ? 2 : 3;
        return this.scores.X >= targetWins || this.scores.O >= targetWins;
    }

    getSeriesWinner() {
        const targetWins = this.gameMode === 'best-of-3' ? 2 : 3;
        if (this.scores.X >= targetWins) return 'X';
        if (this.scores.O >= targetWins) return 'O';
        return null;
    }

    startAutoReset() {
        // Limpa timers anteriores se existirem
        this.clearAutoReset();

        let countdown = 5;
        const t = translations[this.currentLanguage];
        const statusElement = document.getElementById('gameStatus');

        // Atualiza a mensagem a cada segundo
        this.countdownInterval = setInterval(() => {
            statusElement.textContent = `${t.startingNewGame} ${countdown} ${t.seconds}`;
            countdown--;
            
            if (countdown < 0) {
                clearInterval(this.countdownInterval);
            }
        }, 1000);

        // Inicia novo jogo após 5 segundos
        this.autoResetTimer = setTimeout(() => {
            this.resetGame();
        }, 5000);
    }

    clearAutoReset() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
        if (this.autoResetTimer) {
            clearTimeout(this.autoResetTimer);
            this.autoResetTimer = null;
        }
    }

    resetGame() {
        // Limpa o timer automático
        this.clearAutoReset();
        
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winner');
        });

        if (this.checkSeriesWinner()) {
            this.resetScore();
        }

        document.getElementById('gameStatus').textContent = '';
        this.updateDisplay();
    }

    resetScore() {
        // Limpa o timer automático
        this.clearAutoReset();
        
        this.scores = { X: 0, O: 0 };
        this.updateScoreDisplay();
        this.resetGame();
    }

    changeGameMode(event) {
        this.gameMode = event.target.value;
        this.resetScore();
    }

    changeLanguage(event) {
        this.currentLanguage = event.target.value;
        this.updateInterface();
        this.updateDisplay();
        document.documentElement.lang = this.currentLanguage === 'pt' ? 'pt-BR' : 
                                       this.currentLanguage === 'en' ? 'en-US' : 'es-ES';
    }

    updateInterface() {
        const t = translations[this.currentLanguage];
        
        if (!t) return; // Proteção caso as traduções não tenham carregado
        
        document.getElementById('title').textContent = t.title || 'Jogo da Velha';
        document.getElementById('gameModeLabel').textContent = t.gameMode || 'Modo de Jogo:';
        document.getElementById('simpleModeOption').textContent = t.simple || 'Simples';
        document.getElementById('bestOf3Option').textContent = t.bestOf3 || 'Melhor de 3';
        document.getElementById('bestOf5Option').textContent = t.bestOf5 || 'Melhor de 5';
        document.getElementById('playerXLabel').textContent = t.playerX || 'Jogador X';
        document.getElementById('playerOLabel').textContent = t.playerO || 'Jogador O';
        document.getElementById('resetGame').textContent = t.resetGame || 'Reiniciar Jogo';
        document.getElementById('resetScore').textContent = t.resetScore || 'Zerar Placar';
        
        const footerText = `${t.supportDev || 'Apoie o desenvolvimento:'} <a href="https://github.com/sponsors/dwildt" target="_blank" id="sponsorLink">${t.githubSponsors || 'GitHub Sponsors'}</a> | <a href="https://github.com/dwildt/tictactoe" target="_blank" id="repoLink">${t.viewCode || 'Ver código no GitHub'}</a>`;
        document.getElementById('footerText').innerHTML = footerText;
    }

    updateDisplay() {
        const t = translations[this.currentLanguage];
        if (!t) return;
        
        const playerName = t['player' + this.currentPlayer];
        document.getElementById('currentPlayer').textContent = `${t.currentPlayerTurn} ${playerName}`;
    }

    updateScoreDisplay() {
        document.getElementById('scoreX').textContent = this.scores.X;
        document.getElementById('scoreO').textContent = this.scores.O;
    }
}

// Inicializar quando as traduções e a página carregarem
document.addEventListener('DOMContentLoaded', async () => {
    const loadingEl = document.getElementById('loading');
    const gameContainer = document.getElementById('gameContainer');
    
    // Carregar traduções
    const success = await loadTranslations();
    
    if (success) {
        loadingEl.textContent = 'Traduções carregadas!';
    } else {
        loadingEl.textContent = 'Usando traduções básicas...';
    }
    
    // Pequena pausa para mostrar o status
    setTimeout(() => {
        loadingEl.style.display = 'none';
        gameContainer.style.display = 'block';
        new TicTacToeGame();
    }, 500);
});

// Exportar para testes se estiver no Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TicTacToeGame,
        loadTranslations
    };
}