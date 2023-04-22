<script setup>
import { useQuasar } from 'quasar'
import {ref} from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TableExample from '@/components/TableExample.vue'

const $q = useQuasar()
const text = ref('')

console.log($q.dark.isActive) // true, false
$q.dark.set(false)
</script>

<template>
  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <q-input v-model="text" label="Standard" />
  <q-btn color="primary" label="On Left" />

  <TableExample/>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
