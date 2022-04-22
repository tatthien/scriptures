import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return defineConfig({
    base: process.env.BASE_URL,
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: 'http://167.71.208.237:7700',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  })
}
