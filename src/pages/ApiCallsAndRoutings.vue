<template>
    <div>
        <h1>This is Api Call and routing section</h1>
        <div v-if="directData">
           <h3>Direct Data Result</h3>
           <ul v-for="elem in directData" :key="elem.id">
               <li>{{ elem?.id }}</li>
               <li>{{ elem?.name }}</li>
               <li>{{ elem?.email }}</li>
               <li>{{ elem?.website }}</li>
           </ul>
        </div>
        <div v-if="resData">
           <h3>Click To Get Data Result</h3>
           <ul v-for="elem in resData" :key="elem.id">
               <li>{{ elem?.id }}</li>
               <li @click="handleRoute(elem?.id)">{{ elem?.name }}</li>
               <li>{{ elem?.email }}</li>
               <li>{{ elem?.website }}</li>
           </ul>
        </div>
        <button @click="fetchData">Click To Get Data</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ApiCallsAndRoutings',

    data() {
        return {
            resData: null,
            error: null,
            directData: null
        };
    },

    mounted() {
        this.fetchDirectData();
    },

    methods: {
        async fetchData() {
            try {
                const { data } = await await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log({data})
                this.resData = data;
            } catch (error) {
                this.error = error 
            }
        },
        handleRoute(id) {
            this.$router.push({name: "User", params: {id}})
        },
        async fetchDirectData() {
            try {
                const { data } = await await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log({data})
                this.directData = data;
            } catch (error) {
                this.error = error 
            }
        }
    },
};
</script>