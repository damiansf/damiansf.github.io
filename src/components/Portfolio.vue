<template>
  <div>
    <vue-typed-js
      :typeSpeed="20"
      :showCursor="true"
      :strings="[
        './runPortfolioScript; ./runMagicalScriptThatMakesLinksMoreReadableInTerminal'
      ]"
    >
      <span class="console-text">
        {{ prompt }}
        <span class="typing output-text"></span>
      </span>
    </vue-typed-js>
    <vue-typed-js
      :typeSpeed="0"
      :showCursor="false"
      :startDelay="3000"
      :strings="['Executing generic introduction generation...']"
    >
      <span class="typing"></span>
    </vue-typed-js>
    <vue-typed-js
      :typeSpeed="0"
      :showCursor="false"
      :startDelay="4000"
      :strings="[
        '<h3>Hello, my name is Damian Sandhu-Franceschi. I am a Computer Science student at the University of Guelph, welcome to my portfolio!</h3>'
      ]"
      :contentType="'html'"
    >
      <span class="typing"></span>
    </vue-typed-js>
    <vue-typed-js
      :typeSpeed="0"
      :showCursor="false"
      :startDelay="6000"
      :strings="[
        'Extracting projects from users GitHub and attempting to display them somewhat nicely...'
      ]"
    >
      <span class="typing"></span>
    </vue-typed-js>
    <vue-typed-js
      :typeSpeed="0"
      :showCursor="false"
      :strings="[
        '<h2>Live Projects</h2><ul><li><a href=https://github.com/damiansf/IgnoreWebadvisorsCookieLimits >Ignore Webadvisor Cookie Limits</a> Small chrome extension that allows you to avoid Webadvisors (University of Guelphs course selection system) maximum cookies error. <a href=https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc>Available in the chrome webstore</a></li>    <li><a href=https://github.com/damiansf/XboxGamertagGenerator>Xbox Gamertag Generator</a> A fun React app that xboxifys your gamertag <a href=https://damiansf.github.io/XboxGamertagGenerator/>Available online</a></li><li><a href=https://github.com/damiansf/todolist>Todos</a> A basic Vue.js app for creating and completing todos <a href=https://damiansf.github.io/todolist/>Available online</a></li>    <li><a href=https://github.com/damiansf/HowMuchDoIOweYou>How Much Do I Owe You?</a> A React app that allows you to track debts within your friend group. <a href=https://damiansf.github.io/HowMuchDoIOweYou/>Available online</a></li></ul><h2>Other Projects</h2><ul><li><a href=https://github.com/damiansf/guelphCourser>Guelph Courser</a> Google chrome extension to improve UofGs course selection website</li>    <li><a href=https://github.com/damiansf/MockBackendTemplate>Mock Backend Template</a> NodeJs mock backend, used for spitting back sample JSON responses to a frontend app</li>    <li><a href=https://github.com/damiansf/CommuteCostCalculator> Commute Cost Calculator</a> Small python program to calculate commuting gas costs</li><li><a href=https://github.com/damiansf/ArduinoRadar>Arduino Radar</a> Software for a arduino radar system</li>    <li><a href=https://github.com/damiansf/spellmyname>Spell My Name</a> Fun little game to see if you can spell my name</li>    <li><a href=https://github.com/damiansf/LunchPicker>Lunch Picker</a> Randomly selects a place to eat lunch based off data in a JSON file</li>  <li><a href=https://github.com/damiansf/Bot-Template>Bot Template</a> A template that can be used to create Slack bots using Botkit. <a href=https://medium.com/@damiansandhu11/building-custom-slack-bots-using-botkit-825fb4a6f3c7> A tutorial for how to use it can be found on Medium </a> </li> <li><a href=https://github.com/damiansf/BuildingOccupancyPrototype>Building Occupancy Prototype</a> Prototype application for using building light sensor data to get live and historic utilization data, created while at the University of Guelph</li> <li><a href=https://github.com/damiansf/CIS4030Project>CIS4030Project</a> Prototype application for a resume and business card sharing, NFC based Android app, Created with a team of 4 while at the University of Guelph</li> <li><a href=https://github.com/damiansf/NFCPrototype>NFC Prototype</a> Prototype application that was used to explore Android NFC capabilities for the above project</li> <li><a href=https://github.com/damiansf/Social-Prototype>Social Prototype</a> Prototype application for a contact information/social media sharing app that aims to conjugate all of a persons information into one central system for easy sharing</li></ul>'
      ]"
      :startDelay="8000"
      :contentType="'html'"
    >
      <span class="typing"></span>
    </vue-typed-js>
    <vue-typed-js
      :typeSpeed="0"
      :showCursor="false"
      :startDelay="29000"
      :strings="[
        'Executing magical script to make GitHub links printed to terminal more readable...'
      ]"
      @onComplete="handleComplete()"
    >
      <span class="typing"></span>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    prompt: String
  },
  methods: {
    handleComplete: function() {
      setTimeout(
        () => {
          this.$parent.skipAnim();
        },
        900,
        this
      );
    }
  }
};
</script>

<style scoped>
.console-text {
  color: #0f0;
}
.output-text {
  color: #888888;
}
</style>
