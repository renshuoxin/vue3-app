<template>
  <div class="mod-teleport">
    <div class="btn teleport-btn" @click="showDialog">show dialog</div>
    <teleport to='body'>
      <my-dialog ref="dialog"></my-dialog>  
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import myDialog from '@components/dialog.vue';

export default defineComponent({
  components: {
    myDialog,
  },
  setup() {
    
  },
  methods: {
    showDialog() {
      this.$refs.dialog.show();
    },
  },
})
</script>
<style lang="scss" scoped>
.mod-teleport {
  .teleport-btn {
    width: 180px;
  }
}
</style>
