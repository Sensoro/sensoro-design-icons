import { defineConfig, type PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

const analyze = process.env.ANALYZE;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    analyze &&
      (visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        open: true,
      }) as unknown as PluginOption),
  ],
});
