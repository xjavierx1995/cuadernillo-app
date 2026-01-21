<template>
  <div>
    <img src="https://play-lh.googleusercontent.com/jynQCM2vWkn32uIC3AN5i17xpuHuIhbP50OS8vs4v1XxDAfwXLc_NJPIRbbQFeQkWg" alt="lgo">
    <h4 class="q-ma-none">Bienvenido a cuadernillo app</h4>
    <h6 class="q-ma-none">Navega por nuestro cuadernillo para aprender y practicar.</h6>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  todos: () => []
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
