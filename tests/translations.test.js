/**
 * Testes para o arquivo de traduções
 */

const fs = require('fs');
const path = require('path');

describe('Sistema de Traduções', () => {
    let translations;

    beforeAll(() => {
        // Carrega o arquivo de traduções
        const translationsPath = path.resolve(__dirname, '../translations.json');
        const translationsData = fs.readFileSync(translationsPath, 'utf8');
        translations = JSON.parse(translationsData);
    });

    describe('Estrutura do arquivo JSON', () => {
        test('deve ser um JSON válido', () => {
            expect(translations).toBeDefined();
            expect(typeof translations).toBe('object');
        });

        test('deve ter pelo menos os idiomas básicos', () => {
            expect(translations).toHaveProperty('pt');
            expect(translations).toHaveProperty('en');
            expect(translations).toHaveProperty('es');
        });
    });

    describe('Completude das traduções', () => {
        const requiredKeys = [
            'title',
            'gameMode',
            'simple',
            'bestOf3',
            'bestOf5',
            'playerX',
            'playerO',
            'currentPlayerTurn',
            'winner',
            'draw',
            'resetGame',
            'resetScore',
            'supportDev',
            'githubSponsors',
            'gameWon',
            'seriesWon',
            'startingNewGame',
            'seconds'
        ];

        test.each(['pt', 'en', 'es'])('idioma %s deve ter todas as chaves necessárias', (lang) => {
            const langTranslations = translations[lang];
            expect(langTranslations).toBeDefined();

            requiredKeys.forEach(key => {
                expect(langTranslations).toHaveProperty(key);
                expect(langTranslations[key]).toBeTruthy();
                expect(typeof langTranslations[key]).toBe('string');
            });
        });

        test('todos os idiomas devem ter o mesmo número de chaves', () => {
            const languages = Object.keys(translations);
            const keyCounts = languages.map(lang => Object.keys(translations[lang]).length);
            
            // Todos devem ter o mesmo número de chaves
            const firstCount = keyCounts[0];
            keyCounts.forEach(count => {
                expect(count).toBe(firstCount);
            });
        });
    });

    describe('Consistência de conteúdo', () => {
        test('títulos devem ser apropriados para cada idioma', () => {
            expect(translations.pt.title).toBe('Jogo da Velha');
            expect(translations.en.title).toBe('Tic Tac Toe');
            expect(translations.es.title).toBe('Tres en Raya');
        });

        test('nomes de jogadores devem seguir padrão', () => {
            Object.keys(translations).forEach(lang => {
                const t = translations[lang];
                expect(t.playerX).toMatch(/X/);
                expect(t.playerO).toMatch(/O/);
            });
        });

        test('textos de botões não devem estar vazios', () => {
            Object.keys(translations).forEach(lang => {
                const t = translations[lang];
                expect(t.resetGame.length).toBeGreaterThan(0);
                expect(t.resetScore.length).toBeGreaterThan(0);
            });
        });
    });

    describe('Qualidade das traduções', () => {
        test('não deve ter textos duplicados dentro do mesmo idioma', () => {
            Object.keys(translations).forEach(lang => {
                const values = Object.values(translations[lang]);
                const uniqueValues = [...new Set(values)];
                
                // Permitir algumas duplicações comuns (como "GitHub Sponsors")
                expect(uniqueValues.length).toBeGreaterThanOrEqual(values.length - 2);
            });
        });

        test('textos devem ter tamanho razoável', () => {
            Object.keys(translations).forEach(lang => {
                Object.entries(translations[lang]).forEach(([key, value]) => {
                    expect(value.length).toBeGreaterThan(0);
                    expect(value.length).toBeLessThan(100); // Limite razoável
                });
            });
        });

        test('não deve conter caracteres de controle', () => {
            Object.keys(translations).forEach(lang => {
                Object.entries(translations[lang]).forEach(([key, value]) => {
                    expect(value).not.toMatch(/[\x00-\x1F\x7F]/); // Caracteres de controle
                });
            });
        });
    });
});