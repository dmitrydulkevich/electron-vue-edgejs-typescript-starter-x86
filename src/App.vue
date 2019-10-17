<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="test">Init</button>
      <button @click="read">Read</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  test() {
    var edge = require("electron-edge-js");

    var getPerson = edge.func({
      assemblyFile: "C:\\Users\\Admin\\Documents\\Projects\\InitReader\\InitReader\\bin\\Debug\\InitReader.dll",
      typeName: "InitReader.Startup",
      methodName: "Invoke"
    });

    getPerson("JavaScript", function(error: any, result: any) {
      if (error) throw error;
      console.log(result);
    });
  }

  read(){
    var edge = require("electron-edge-js");

    var getPerson = edge.func({
      assemblyFile: "C:\\Users\\Admin\\Documents\\Projects\\ReadDocument\\ReadDocument\\bin\\Debug\\ReadDocument.dll",
      typeName: "ReadDocument.Startup",
      methodName: "Invoke",
      references: [
        "C:\\Users\\Admin\\Documents\\Projects\\ReadDocument\\ReadDocument\\bin\\Debug\\dlls\\MMMReaderDotNet40.dll"
      ]
    });

    getPerson("JavaScript", function(error: any, result: any) {
      if (error) throw error;
      console.log(result);
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
