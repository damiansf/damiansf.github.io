<template>
  <div id="app">
    <Portfolio prompt="DamianSandhu-Franceschi@Developer:~$ "/>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'app',
  components: {
    Portfolio
  }
}
</script>

<style>
#app {
  font-family: courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #888888;
  margin-left:auto;
	margin-right:auto;
  font-size:14px;
}
</style>
