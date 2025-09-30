import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

const tsconfigPath = 'tsconfig.spec.json';

export default defineConfig(({ mode }) => ({
  plugins: [tsconfigPaths({ projects: [tsconfigPath] })],
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
