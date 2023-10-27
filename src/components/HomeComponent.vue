<template>
    <div>
        <!-- Event Condition -->
        <div>
            <h1>Hello this is vue {{ data }}</h1>
            <h1>Count {{ count }}</h1>
            <p>Your count is below {{ maxCount }}</p>
            <button v-on:click="incCount()">Inc Count</button>
            <button v-bind:disabled="true" v-on:click="decCount()">Dec Count</button>
        </div>
        <!-- Looping -->
        <div>
            <table>
                <thead>
                  <tr>
                    <th>Sl.no</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                   <tr v-for="(elem, i) in items" :key="elem.id"> 
                       <td>{{ i + 1 }}</td>
                       <td>{{ elem?.name }}</td>
                       <td>{{ elem?.dec }}</td>
                   </tr>
                </tbody>
            </table>
        </div>

        <!----------------------------- Parent data from parent to child  -------------------------------------------->

        <div>
            <ChildComponent :name="items" title="Welcome to the parent to the child"/>
        </div>

        <!----------------------------- Child to parent ----------------------------------------------------------------->
        <div>
            <h1>Welcome To the Child to parent</h1>
            <h1> {{ title }} </h1>
            <ChildComponent v-on:changeTitle="incChildCounter($event)" :name="items" title="Welcome to the parent to the child"/>
        </div>

        <div>
            <h1>Welcome To the Child to parent part2</h1>
            <h1> {{ title }} </h1>
            <ChildComponent @changeTitle2="incChildCounter2($event)" :name="items" title="Welcome to the parent to the child"/>
        </div>

        <!-- Input OnChange -->
        <div>
            <h1> Welcome To Onchange Input Vue </h1>
            <h2>{{ myName }}</h2>
            <input placeholder="name" v-model="myName" type="text" @OnChange="handleNameChange"/>
        </div>
        <!-- Form Data -->
        <div>
            <h1> Welcome To The Vue Form </h1>
            <FormComponent />
        </div>
        <!--  Filters  -->
        <div>
            <h1> Welcome To Filter In Vue JS </h1>
            <h2>{{ filterName | UCase }}</h2>
        </div>

          <!--  LifeCycle Section  -->
          <h1>Welcome to the the LifeCycle Section</h1>
          <p>Life cycle method shirf Component me he kaam karta hai, application lavel me kaam nahi karta hai</p>
          <!-- BeforeCreate and Created -->
          <div>
            <h1>BeforeCreate and Created</h1>
            <!-- Jab v Hamara component Banane wala hota hai ave bana nahi hai tab beforeCreate Life cycle call hota hai  -->
            <h3> Before Create </h3>
            <p> Jab v Hamara component Banane wala hota hai ave bana nahi hai tab beforeCreate Life cycle call hota hai </p>
            <p>{{ createdName }}</p>
            <!-- Jab v hamara data or events set hote hai tab created lifecycle call hota hai -->
            <h3> Created </h3>
            <p> Jab v hamara data or events set hote hai tab created lifecycle call hota hai </p>
           
        </div>
          <!-- BeforeCreate and Created -->
        <div>
            <h1>beforeMount and Mounted</h1>
            <!-- Jab v hamara html render hone wala hota hai ave huwa nahi hota hai tab ye Before Mount Life cycle call hota hai  -->
            <h3> Before Mount </h3>
            <p> Jab v hamara html render hone wala hota hai ave huwa nahi hota hai tab ye Before Mount Life cycle call hota hai </p>
            <p>{{ createdName }}</p>
            <!-- Jab hamara html render ho chuka hota hai tab ye wala call hota hai -->
            <h3> Mounted </h3>
            <p> Jab hamara html render ho chuka hota hai tab ye wala call hota hai, HTML DOM Modify karne k liye mounted use karo </p>
        </div>
        <div>
            <h1>beforeDestroy and destroyed</h1>
            <!-- Jab v hamara component DOM se hatne wala hota hai tab ye Before Mount Life cycle call hota hai  -->
            <h3> beforeDestroy </h3>
            <p> Jab v hamara component DOM se hatne wala hota hai tab ye Before Mount Life cycle call hota hai </p>
            <div v-if="!displayDestroyed">
                <DestroyedComponent />
            </div>
            <button @click="handleBeforeDestroyed()">Marne se pahle ka aakhre sabdh</button>
            <p>{{ createdName }}</p>
            <!-- Jab hamara Component DOM completely hat jata hai tab Destroyed lifeCycle call hota hai -->
            <h3> Destroyed </h3>
            <p> Jab hamara Component DOM completely hat jata hai tab Destroyed lifeCycle call hota hai </p>
        </div>
    </div>
</template>

<script>
import ChildComponent from './ChildComponents.vue';
import FormComponent from './FormComponent.vue';
import DestroyedComponent from './DestroyedComponent.vue';
export default {
    name: 'HomeComponent',
    props: {
        data: String
    },
    components: {
       ChildComponent,
       FormComponent,
       DestroyedComponent
    },
    methods: {
        incCount() {
            this.count = this.count + 1
        },

        decCount() {
            if (this.count === 0) {
                return alert("can't go below 0")
            }
            this.count = this.count - 1
        },

        incChildCounter(title) {
            console.log({title})
            this.title = title
            // this.childCount = this.childCount + 1
        },

        incChildCounter2(title) {
            console.log({title})
            this.title2 = title
            // this.childCount = this.childCount + 1
        },

        handleNameChange(){
            console.log(this.myName)
        },
        handleBeforeDestroyed(){
            this.displayDestroyed = !this.displayDestroyed;
        },
    },
    data() {
        return {
            count: 0,
            maxCount: 5,
            childCount: 0,
            title: "child",
            title2: "child2",
            createdName: 'Sajjad',
            filterName: "Hello I was In Lower Case, but now converted to Upper case",
            myName: "",
            displayDestroyed: false,
            items: [
                { id: 1, name: 'abc', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 2, name: 'bcd', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 3, name: 'cde', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 4, name: 'def', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 5, name: 'efg', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 6, name: 'fgh', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 7, name: 'ghi', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 8, name: 'hij', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 9, name: 'ijk', dec: 'ndh jd sjk j hello i am under the water' },
                { id: 10, name: 'jkl', dec: 'ndh jd sjk j hello i am under the water' },
            ]
        }
    },
    beforeCreate: function(){
        console.log("before create")
    },
    created: function(){      //
        console.log("created")
        this.createdName = "alam"
    },
    beforeMount: function(){
        console.log("before mounted")
        console.log(this.$el);
    },
    // HTML DOM Modify karne k liye mounted use karo
    mounted: function(){
        console.log('mounted')
        console.log(this.$el);
    },
    // watchers 
    // computed
    // mixins
    // filters
}
</script>