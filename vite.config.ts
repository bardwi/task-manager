import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'utils': path.resolve(__dirname, './src/utils'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'assets': path.resolve(__dirname, './src/assets'),
      'types': path.resolve(__dirname, './src/types'),
      'tasks': path.resolve(__dirname, './src/tasks'),
      'layout': path.resolve(__dirname, './src/components/layout'),
      'forms': path.resolve(__dirname, './src/components/forms'),
      'styles': path.resolve(__dirname, 'src/styles'),
    }
  },
css: {
    preprocessorOptions: {
      scss: {
       
          loadPaths: [path.resolve(__dirname, 'src/styles')],
          quietDeps: true,
        
      },
    }
  }
});
