import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    setupFiles: [
        '<rootDir>/test/setupTests.ts',
    ],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    moduleDirectories: [
        'node_modules',
        'utils',
        __dirname,
    ],
};

export default config;
