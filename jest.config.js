module.exports = {
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    // colocar nessa array todas as pastas a serem ignoradas:
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    // transformar arquivos para JavaScript com o Babel:
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    // ambiente onde os testes serão executados:
    testEnvironment: 'jsdom',
    collectCoverage: true,
    // adicionar qualquer tipo de arquivo que deve ser testado nessa array (ou que não deve com !):
    collectCoverageFrom: [
        'src/**/*.tsx',
        '!src/**/*.test.tsx',
        '!src/**/test.tsx',
        '!src/pages/**/*.tsx',
        '!src/styles/**/*.ts',
        '!src/types/**/*.d.ts',
        '!src/**/mock.ts'
    ],
    // faz com que o Coverage Report seja feito direto no terminal:
    coverageReporters: ['text'],
    // configuração de diretórios (sem isso o jest pode não recnhecer alguns imports:
    roots: ['<rootDir>', 'src'],
    modulePaths: ['<rootDir>', 'src'],
    moduleDirectories: ['node_modules']
};
