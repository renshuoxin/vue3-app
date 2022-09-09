<template>
  <div>person.name: {{ person.name }}</div>
  <div>p.sex.value: {{ p.sex.val }}</div>
</template>
<script lang="ts" setup>
import { watch, reactive, computed } from 'vue';

interface Person {
  age: number;
  name: string;
  sex: {
    val: string;
  };
}

const person:Person = reactive({
  name: 'shuoxin',
  age: 18,
  sex: {
    val: '女',
  },
});

/**
 * watch监听的属性的值
 * 1、响应式对象
 * 2、ref(包括计算属性computed<返回ref对象>)
 * 3、getter函数
 * 4、多个来源组成的数组
 */
// 1、监听响应式对象
watch(person, () => {
  console.log('person发生变化：', person);
});

// watch回调不会执行：监听的数据源是基本类型，不属于响应式对象或计算属性
// watch(person.age, () => {
//   // warn: A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
//   console.log('person.age发生变化：', person.age);
// });

// 2、监听计算属性
const age = computed(() => person.age);
watch(age, () => {
  console.log('计算属性computed(() => person.age)发生变化：', age.value);
});

// 3、监听getter函数
watch(() => person.age, (val) => {
  console.log('计算属性简写发生变化：', val);
})

setTimeout(() => {
  person.age = 20;
}, 2000);


// watch深层监听
const p: Person = reactive({
  name: 'name',
  age: 12,
  sex: {
    val: '女',
  },
});

// 默认深度监听
watch(p, (newVal, oldVal) => {
  console.log('监听响应式对象，改变嵌套属性值newVal===oldVal:', newVal===oldVal);
  // 在嵌套的属性变更时触发
  // 注意：`newVal` 此处和 `oldVal` 是相等的
  // 因为它们是同一个对象！
  console.log('watch深层监听p.sex.value:', p);
});

// 监听响应式对象getter函数，不是深度监听
watch(() => p.sex, () => {
  // 仅当 p.sex 被替换时触发
  console.log('计算属性p.sex:', p.sex);
});

// 强制转换为深层侦听器
watch(() => p.sex, () => {
  console.log('计算属性p.sex:', p.sex);
}, { deep: true });

setTimeout(() => {
  p.sex.val = '男';
}, 3000);
</script>