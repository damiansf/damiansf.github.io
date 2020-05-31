<template>
  <div id="app">
    <Portfolio
      v-if="!skipAnimation"
      prompt="DamianSandhu-Franceschi@Developer:~$ "
    />
    <PortfolioNoAnimation
      v-if="skipAnimation"
      prompt="DamianSandhu-Franceschi@Developer:~$ "
    />
    <div
      class="skip-text"
      v-on:click="skipAnimation = true"
      v-if="!skipAnimation"
      :id="skipAnimation"
    >
      Skip Animation
    </div>
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio.vue";
import PortfolioNoAnimation from "./components/PortfolioNoAnimation.vue";

export default {
  name: "app",
  components: {
    Portfolio,
    PortfolioNoAnimation
  },
  data: function() {
    return {
      skipAnimation: false
    };
  },
  methods: {
    skipAnim: function() {
      this.skipAnimation = true;
    }
  }
};
</script>

<style>
#app {
  font-family: courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #888888;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
}
.skip-text {
  color: #00bbcc;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
}
</style>
