<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
        <b-button @click="init" variant="success">Init</b-button>
        <b-button @click="read" variant="success">Read</b-button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import helloWorld from '@/components/common/hello-world.vue'; // @ is an alias to /src
    import { Route } from 'vue-router';
    import actionNames from '@/store/names/action-names';
    import DotnetResponse, { idReader } from '@/dotnet';
    import { error } from 'util';
    import CodelineData from '../dotnet/id-reader/models/codeline-data';

    @Component({
        components: {
            'hello-world': helloWorld
        }
    })
    export default class Home extends Vue {
        result: string = '';

        beforeRouteEnter(to: Route, from: Route, next: (a: any) => void) {
            console.log('beforeRouteEnter');
            next((sidebar: Home) => sidebar.setCounter());
        }

        setCounter() {
            console.log('setCounter');
            this.$store.dispatch(actionNames.mainSetCounter, 5);
        }

        init() {
            idReader.initReader(null, function (error: any, result: DotnetResponse<boolean>) {
                if (error)
                    throw error;

                console.log(result);
            });
        }

        read() {
            idReader.readDocument(null, function (error: any, result: DotnetResponse<CodelineData>) {
                if (error)
                    throw error;

                if (result.success && result.data) {
                    console.log(result.data);
                }
            })
        }
    }
</script>
