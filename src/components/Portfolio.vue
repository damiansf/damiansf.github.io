<template>
  <div>
    <vue-typed-js :typeSpeed="20" :showCursor="true" :strings="['cat welcome.txt && cat projects.txt']">
      <span class="console-text">{{prompt}}<span class="typing output-text" ></span></span>
    </vue-typed-js>
    <vue-typed-js :typeSpeed="20" :showCursor="false" :startDelay="1500" :strings="['Hello, my name is Damian Sandhu-Franceschi. I am a Computer Science student at the University of Guelph, welcome to my portfolio!']">
      <span class="typing"></span>
    </vue-typed-js>
    <vue-typed-js :typeSpeed="5" :showCursor="false" :strings="['<h2>Live Projects</h2><ul><li><a href=https://github.com/damiansf/IgnoreWebadvisorsCookieLimits>Ignore Webadvisor Cookie Limits</a> Small chrome extension that allows you to avoid Webadvisors (uofgs course selection system) maximum cookies error. <a href=https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc>Available in the chrome webstore</a></li>    <li><a href=https://github.com/damiansf/XboxGamertagGenerator>Xbox Gamertag Generator</a> A fun React app that xboxifys your gamertag <a href=https://damiansf.github.io/XboxGamertagGenerator/>Available online</a></li><li><a href=https://github.com/damiansf/todolist>Todos</a> A basic Vue.js app for creating and completing todos <a href=https://damiansf.github.io/todolist/>Available online</a></li>    <li><a href=https://github.com/damiansf/HowMuchDoIOweYou>How Much Do I Owe You? (WIP)</a> A React app that allows you to track debts within your friend group. <a href=https://damiansf.github.io/HowMuchDoIOweYou/>Available online</a></li></ul><h2>Other Projects</h2><ul><li><a href=https://github.com/damiansf/guelphCourser>Guelph Courser</a> Google chrome extension to improve UofGs course selection website</li>    <li><a href=https://github.com/damiansf/MockBackendTemplate>Mock Backend Template</a> NodeJs mock backend, used for spitting back sample JSON responses to a frontend app</li>    <li><a href=https://github.com/damiansf/CommuteCostCalculator> Commute Cost Calculator</a> Small python program to calculate commuting gas costs</li><li><a href=https://github.com/damiansf/ArduinoRadar>Arduino Radar</a> Software for a arduino radar system</li>    <li><a href=https://github.com/damiansf/spellmyname>Spell My Name</a> Fun little game to see if you can spell my name</li>    <li><a href=https://github.com/damiansf/LunchPicker>Lunch Picker</a> Randomly selects a place to eat lunch based off data in a JSON file</li></ul>']" :startDelay="6100">
      <span class="typing" ></span>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    prompt: String
  }
}
</script>

<style scoped>
.console-text {
  color: #0f0;
}
.output-text {
  color: #888888;
}
</style>
