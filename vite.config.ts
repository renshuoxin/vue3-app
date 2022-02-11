import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [
    vue(),
    pages({
      dirs: [{
        dir: 'src/pages',
        baseRoute: '',
      }
      // , {
      //   dir: 'src/views/pages',
      //   baseRoute: 'views',
      // }
      ],
      extendRoute(route) {
        // if (route.path === '/test') {
        //   return {
        //     ...route,
        //     meta: { layout: 'test'},
        //   };
        // }
        return {
          ...route,
        };
      },
      onRoutesGenerated(routes) {
        console.log(routes);
      },
      onClientGenerated(clientCode) {
        console.log(clientCode);
      },
    }),
    layouts(),
  ],
});
