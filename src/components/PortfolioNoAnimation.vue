<template>
  <div>
    <span class="console-text">{{prompt}}</span>
    <span>./runPortfolioScript; ./runMagicalScriptThatMakesLinksMoreReadableInTerminal</span>
    <br><span>Executing generic introduction generation...</span>
    <h3>Hello, my name is Damian Sandhu-Franceschi. I am a Computer Science student at the University of Guelph, welcome to my portfolio!</h3>
    <span>Extracting projects from users GitHub and attempting to display them somewhat nicely...</span>
    <h2>Live Projects</h2>
    <ul>
      <li><a href=https://github.com/damiansf/IgnoreWebadvisorsCookieLimits>Ignore Webadvisor Cookie Limits</a> Small chrome extension that allows you to avoid Webadvisors (University of Guelphs course selection system) maximum cookies error. <a href=https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc>Available in the chrome web store</a></li>
      <li><a href=https://github.com/damiansf/XboxGamertagGenerator>Xbox Gamertag Generator</a> A fun React app that xboxifys your gamertag <a href=https://damiansf.github.io/XboxGamertagGenerator/>Available online</a></li>
      <li><a href=https://github.com/damiansf/todolist>Todos</a> A basic Vue.js app for creating and completing todos <a href=https://damiansf.github.io/todolist/>Available online</a></li>
      <li><a href=https://github.com/damiansf/HowMuchDoIOweYou>How Much Do I Owe You?</a> A React app that allows you to track debts within your friend group. <a href=https://damiansf.github.io/HowMuchDoIOweYou/>Available online</a></li>
      <li><a href=https://github.com/damiansf/Uglify>Uglify</a> A fun and super simple chrome extension that gives the browser a interesting makeover and contains a random odds surprise. <a href=https://chrome.google.com/webstore/detail/uglify/iffebpkheiniojlhbppfnmdjpfmfdbof>Available in the chrome web store</a></li>
    </ul>
    <h2>Other Projects</h2>
    <ul>
      <li><a href=https://github.com/damiansf/guelphCourser>Guelph Courser</a> Google chrome extension to improve UofGs course selection website</li>
      <li><a href=https://github.com/damiansf/MockBackendTemplate>Mock Backend Template</a> NodeJs mock backend, used for spitting back sample JSON responses to a frontend app</li>
      <li><a href=https://github.com/damiansf/CommuteCostCalculator> Commute Cost Calculator</a> Small python program to calculate commuting gas costs</li>
      <li><a href=https://github.com/damiansf/ArduinoRadar>Arduino Radar</a> Software for a arduino radar system</li>
      <li><a href=https://github.com/damiansf/spellmyname>Spell My Name</a> Fun little game to see if you can spell my name</li>
      <li><a href=https://github.com/damiansf/LunchPicker>Lunch Picker</a> Randomly selects a place to eat lunch based off data in a JSON file</li>
      <li><a href=https://github.com/damiansf/Bot-Template>Bot Template</a> A template that can be used to create Slack bots using Botkit. <a href=https://medium.com/@damiansandhu11/building-custom-slack-bots-using-botkit-825fb4a6f3c7> A tutorial for how to use it can be found on Medium </a></li>
      <li><a href=https://github.com/damiansf/BuildingOccupancyPrototype>Building Occupancy Prototype</a> Prototype application for using building light sensor data to get live and historic utilization data, created while at the University of Guelph</li>
      <li><a href=https://github.com/damiansf/CIS4030Project>CIS4030Project</a> Prototype application for a resume and business card sharing, NFC based Android app, Created with a team of 4 while at the University of Guelph</li>
      <li><a href=https://github.com/damiansf/NFCPrototype>NFC Prototype</a> Prototype application that was used to explore Android NFC capabilities for the above project</li>
      <li><a href=https://github.com/damiansf/Social-Prototype>Social Prototype</a> Prototype application for a contact information/social media sharing app that aims to conjugate all of a persons information into one central system for easy sharing</li>
      <li><a href=https://github.com/damiansf/UniversityCourseAvailabilityChecker>University Course Availability Checker</a> Simple messy python script that requests course information from the University of Guelphs course selection system on a specified interval. The script uses this information to inform the user if specified courses have openings. The goal of this script is to automate the process of searching for open courses</li>
    </ul>
    <span>Executing magical script to make GitHub links printed to terminal more readable...</span>
    <br><span>Links enhanced!</span>
    <br><span>Entering an infinite loop that does nothing for fun!!</span>
  </div>
</template>

<script>
export default {
  name: "PortfolioNoAnimation",
  props: {
    prompt: String
  }
};
</script>

<style scoped>
.console-text {
  color: #0f0;
}
li h2 span {
  color: #888888;
}
a {
  color: #00CCFF;
}
a:visited {
  color: #7c26cb;
}
</style>
