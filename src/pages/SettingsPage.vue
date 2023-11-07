<template>
    <div>
        <h1>Welcome to the Settings page</h1>

        <div>
            <!----------------------------------DYNAMIC COMPONENTS -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">Dynamic components</h3>
            <!-- <SignInComponent :is="SignInComponent"/>
            <SignUpComponent /> -->
            <component :is="initialComponent"></component>
            <button @click="handleSignInClick">SignIn</button>
            <button @click="handleSignUpClick">SignUp</button>
            <br>
            <br>
            <!----------------------------------CUSTOMS Directives -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">Custom Directives</h3>
            <p>v- k sath jo v start hota hai wo directives hai, iska ek example dekhenge h5 ka size change kr k</p>
            <h5 v-size="'sm'">Custom Directives in vue js</h5>
            <h5 v-size="'md'">Custom Directives in vue js</h5>
            <h5 v-size="'xl'">Custom Directives in vue js</h5>
            <br>
            <br>
            <!----------------------------------MIXINS -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">MIXINS</h3>
            <p class="">Duplicate code ko remove karne k liye hum log mixins ka use karte hai. Jo data property hum log mixins me use karte wo same data property ko ham log jaha mixins ko import karte hai waha use kar sakte hai.</p>
            <ProductsComponent />
            <SiteMapVue />

            <!----------------------------------WATCHERS -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">WATCHERS</h3>
            <p>Data property k under jo variable banate hai data store karne k liye. Same use karna hai watch object k under. issay ye hoga ki jab v wo data property change hoga hame watch k under likha function trigger ho jaiga</p>
            <h5>{{ count }}</h5>
            <button @click="count=count+1">Inc Num</button>
            
            <br>
            <br>
            <!---------------------------------- COMPUTED PROPERTIES -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">COMPUTED PROPERTIES</h3>
            <p>It is used for complex logic writing. that means instead of using of complex logic in one line we will create function for that. <br>
             here inside data we have comp property if you want to extracy the data value you have to deep down in to it.
            </p>
            <p>In the below example we can see that for extracting just name, we are using some complex logic.
                . A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as author.books has not changed, multiple access to publishedBooksMessage will immediately return the previously computed result without having to run the getter function again.
            </p>
            <h5>{{ getName }}</h5>
            <h5>{{ count }}</h5>
            <button @click="count=count+1">Inc Num</button>
        </div>
    </div>
</template>
<script>
import SignInComponent from '@/components/SignInComponent.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';
import ProductsComponent from '@/components/mixins/ProductsComponent.vue';
import SiteMapVue from '@/components/mixins/SiteMap.vue';
export default {
    name: 'SettingsPage.vue',
    components: {
        SignInComponent,
        SignUpComponent,
        ProductsComponent,
        SiteMapVue
    },
    data() {
        return {
            initialComponent: "SignInComponent",
            count: 0,
            com: {
                data2: {
                    data1: {
                        data: {
                            name: "sajjad"
                        }
                    }
                }
            }
        }
    },
    watch: {
        count(val, prevState) {
        alert(`Count is changed ${val} ${prevState}`)
       }
    },
    computed: {
        getName() {
          return this.com?.data2?.data1?.data?.name  
        }
    },
    methods: {
        handleSignInClick() {
            this.initialComponent = "SignInComponent"
        },
        handleSignUpClick() {
            this.initialComponent = "SignUpComponent"
        }
    }
}
</script>