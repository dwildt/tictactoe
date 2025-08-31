const js = require('@eslint/js');

module.exports = [
    {
        ignores: [
            'node_modules/',
            'coverage/',
            'eslint.config.js',
            'dist/',
            'build/',
            '*.log'
        ]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'script',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                fetch: 'readonly',
                setTimeout: 'readonly',
                setInterval: 'readonly',
                clearTimeout: 'readonly',
                clearInterval: 'readonly',
                module: 'writable'
            }
        },
        rules: {
            // Error prevention
            'no-console': 'warn',
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-redeclare': 'error',

            // Code style (relaxed for existing code)
            'indent': ['error', 4, { 'ignoredNodes': ['TemplateLiteral'] }],
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
            'semi': ['error', 'always'],

            // Best practices
            'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'prefer-const': 'error',
            'no-var': 'error'
        }
    },
    {
        files: ['tests/**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'script',
            globals: {
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeAll: 'readonly',
                jest: 'readonly',
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly',
                global: 'writable'
            }
        },
        rules: {
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            'no-control-regex': 'off'
        }
    }
];