<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  data() {
    return {
      routeLinks: [],
    };
  },
  setup() {},
  components: {
    HelloWorld
  },
  created() {
    this.routeLinks = this.$router.options.routes;
  },
  mounted() {},
})
</script>


<template>
  <div class="main-container">
    <div class="menu-wrapper">
      <router-link
        class="menu-list-item"
        v-for="link in routeLinks"
        :key="link.name"
        :to="link.path"
      >
        {{ link.name }}
      </router-link>
    </div>
    <router-view class="content-wrapper"></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style lang="scss">
@import '@assets/css/global.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px 30px 0;
}
</style>
<style lang="scss" scoped>
.main-container {
  .menu-wrapper {
    .menu-list-item {
      padding: 0 15px;
      line-height: 20px;
      text-decoration: none;
      &:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>
