<template>
  <div>
    <h1>{{ state }}</h1>
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
    <br />
    <input type="text" v-model="index" />
    <button @click="go(index)">GO</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCycleList } from './composables/useCycleList';

const { state, next, prev, go } = useCycleList(['A', 'B', 'C']);

state.value = 'C';

const index = ref(0);
</script>

<style scoped></style>
