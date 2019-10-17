<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    <b-button @click="test" variant="success">Init</b-button>
    <b-button @click="read" variant="success">Read</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import helloWorld from "@/components/common/hello-world.vue"; // @ is an alias to /src
import { Route } from "vue-router";
import actionNames from "../store/names/action-names";

@Component({
  components: {
    "hello-world": helloWorld
  }
})
export default class Home extends Vue {
  result: string = "";

  beforeRouteEnter(to: Route, from: Route, next: (a: any) => void) {
    console.log("beforeRouteEnter");
    next((sidebar: Home) => sidebar.setCounter());
  }

  setCounter() {
    console.log("setCounter");
    this.$store.dispatch(actionNames.mainSetCounter, 5);
  }

  test() {
    var edge = require("electron-edge-js");

    var getPerson = edge.func({
      assemblyFile:
        "C:\\Users\\Admin\\Documents\\Projects\\InitReader\\InitReader\\bin\\Debug\\InitReader.dll",
      typeName: "InitReader.Startup",
      methodName: "Invoke"
    });

    getPerson("JavaScript", function(error: any, result: any) {
      if (error) throw error;
      console.log(result);
    });
  }

  read() {
    var edge = require("electron-edge-js");

    var getPerson = edge.func({
      assemblyFile:
        "C:\\Users\\Admin\\Documents\\Projects\\ReadDocument\\ReadDocument\\bin\\Debug\\ReadDocument.dll",
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
