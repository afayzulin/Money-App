<template>
  <div id="app">
    Let the project begins... NOW!
    <header-component></header-component>
    <br>
    <div v-for="task in tasks_list"> {{task}}</div>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'app',
  components: {
    HeaderComponent,
  },
  computed: {
    tasks_list () {
      return this.$store.state.tasks_list;
    }
  },
}
</script>

<style>

</style>
