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
          target: process.env.MEILI_HOST_NAME,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  })
}