import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import angular from '@analogjs/vite-plugin-angular';

const tsconfigPath = 'tsconfig.spec.json';

export default defineConfig(({ mode }) => ({
  plugins: [
    angular(),
    tsconfigPaths({ projects: [tsconfigPath] })
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setup-test.ts'],
    typecheck: { enabled: true },
    globals: true,
    restoreMocks: true,
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
