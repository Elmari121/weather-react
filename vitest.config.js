/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';

// Basic Vitest configuration for the project
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js']
  }
});
