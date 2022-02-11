import { setupLayouts } from 'virtual:generated-layouts';
import routes from 'virtual:generated-pages';
import { createRouter, createWebHistory } from 'vue-router';

console.log(setupLayouts(routes));
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
