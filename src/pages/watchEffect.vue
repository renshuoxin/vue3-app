<template>
  <div class="mod-watch-effect">
    <div class="radio-box" @click="curType = 'a'">
      <input type="radio" value="a" name="a" :checked="curType === 'a'" />
      <label for="a">a</label>
    </div>
    <div class="radio-box" @click="curType = 'b'">
      <input type="radio" value="b" name="b" :checked="curType === 'b'"  />
      <label for="b">b</label>
    </div>
    <ul>
      <li v-for="(item, idx) in list" :key="idx">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue';

interface listValue {
  title: string;
};

interface Person {
  name: string;
  age: number;
}

const list = ref<listValue[]>([]);
const curType = ref('a');
let person: Person = reactive({
  name: 'shuoxin',
  age: 18,
});


const data: {[key: string]: listValue[]} = {
  a: [{
    title: 'titleA1',
  }, {
    title: 'titleA2'
  }],
  b: [{
    title: 'titleB1',
  }, {
    title: 'titleB2'
  }],
}

const fetchData = (type: string) => {
  const result: listValue[] = data[type];
  list.value = result;
}

watchEffect(() => {
  console.log('watchEffect');
  fetchData(curType.value);
});

// watchEffect追踪能访问到的响应式属性，此处为person.age；若修改person不能触发监听回调
watchEffect(() => {
  console.log('person.age:', person.age);
});

setTimeout(() => {
  person = {
    name: 'name',
    age: 12,
  };
}, 2000);

// watchEffect异步问题
watchEffect(() => {
  setTimeout(() => {
    console.log('settimeout person.age is ', person.age);
  }, 0);

  console.log('watch effect 回调');
});

setTimeout(() => {
  person.age = 20;
}, 2000);

// watchEffect 只有get属性才会被监听
watchEffect(() => {
  person.name = 'name';
  console.log('watch effect set属性不进行监听');
});

setTimeout(() => {
  person.name = 'settimeout name';
}, 1000);
</script>     
<style lang="scss" scoped>
.mod-watch-effect {
  padding-top: 20px;
  .radio-box {
    display: inline-flex;
    align-items: center;
    margin-right: 15px;
    label {
      margin-left: 3px;
    }
  }
}
</style>
