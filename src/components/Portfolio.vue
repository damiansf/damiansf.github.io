<template>
  <div>
    <vue-typed-js :typeSpeed="20" :showCursor="false" :strings="['Hello, my name is Damian Sandhu-Franceschi']">
      <h2 class="typing"></h2>
    </vue-typed-js>
    <vue-typed-js :typeSpeed="20" :showCursor="false" :startDelay="1500" :strings="['I am a Computer Science student at the University of Guelph, welcome to my portfolio!']">
      <h2 class="typing"></h2>
    </vue-typed-js>
    <div>
      <h2>Live Projects</h2>
      <ul>
        <li><a href="https://github.com/damiansf/IgnoreWebadvisorsCookieLimits">Ignore Webadvisor Cookie Limits</a> Small chrome extension that allows you to avoid Webadvisor's (uofg's course selection system) maximum cookies error. <a href="https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc">Available in the chrome webstore</a></li>
        <li><a href="https://github.com/damiansf/XboxGamertagGenerator">Xbox Gamertag Generator</a> A fun React app that xboxify's your gamertag <a href="https://damiansf.github.io/XboxGamertagGenerator/">Available online</a></li>
        <li><a href="https://github.com/damiansf/HowMuchDoIOweYou">How Much Do I Owe You? (WIP)</a> A React app that allows you to track debts within your friend group. <a href="https://damiansf.github.io/HowMuchDoIOweYou/">Available online</a></li>
      </ul>
      <h2>Other Projects</h2>
      <ul>
        <li><a href="https://github.com/damiansf/guelphCourser">Guelph Courser</a> Google chrome extension to improve UofG's course selection website</li>
        <li><a href="https://github.com/damiansf/MockBackendTemplate">Mock Backend Template</a> NodeJs mock backend, used for spitting back sample JSON responses to a frontend app</li>
        <li><a href="https://github.com/damiansf/CommuteCostCalculator"> Commute Cost Calculator</a> Small python program to calculate commuting gas costs</li>
        <li><a href="https://github.com/damiansf/ArduinoRadar">Arduino Radar</a> Software for a arduino radar system</li>
        <li><a href="https://github.com/damiansf/spellmyname">Spell My Name</a> Fun little game to see if you can spell my name</li>
        <li><a href="https://github.com/damiansf/LunchPicker">Lunch Picker</a> Randomly selects a place to eat lunch based off data in a JSON file</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 10rem;
}
</style>
