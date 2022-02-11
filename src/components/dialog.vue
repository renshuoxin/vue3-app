<template>
  <div class="dialog" v-show="isShow">
    <div class="main-dialog">
      <div class="close" @click="hide">X</div>
      <div class="title">title</div>
      <div class="content">content</div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isShow: false,
    }
  },
  setup() {
    
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
  },
});
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  .main-dialog {
    min-width: 500px;
    min-height: 200px;
    border-radius: 8px;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .close {
      position: absolute;
      right: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
}
</style>
