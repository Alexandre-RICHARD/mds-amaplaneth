import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['tests/**/*.test.ts?(x)', 'resources/**/*.test.ts?(x)'],
        exclude: [],
        reporter: [],
        outputFile: './report/index.html',
        setupFiles: 'vitest.setup.ts',
        passWithNoTests: true,
        coverage: {
            reportOnFailure: true,
            reportsDirectory: './report/coverage',
            enabled: false,
            provider: 'v8',
            reporter: 'html',
            include: ['resources/**/*.{ts,tsx,js,jsx}'],
            exclude: [
                'resources/**/*.type.ts',
                'resources/**/*.d.ts',
                'resources/**/*.enum.ts',
                'resources/**/*.test.*',
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@images': '/resources/images',
            '@css': '/resources/css',
        },
    },
});
