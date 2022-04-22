import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  const config = {
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
  }

  return config
})
