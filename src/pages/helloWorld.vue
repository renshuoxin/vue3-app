<template>
  <div class="mod-hello-world">{{ msg }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      msg: 'hello world',
    };
  },
  setup() {
    
  },
});
</script>
