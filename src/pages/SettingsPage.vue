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
            <ProductsComponent />
            <SiteMapVue />

            <!----------------------------------WATCHERS -------------------------------------------- -->
            <h3 style="border-bottom: 1px solid black;">WATCHERS</h3>
            <h5>{{ count }}</h5>
            <button @click="count=count+1">Inc Num</button>
            
            <br>
            <br>
          
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
            count: 0
        }
    },
    watch: {
        count(val, prevState) {
        alert(`Count is changed ${val} ${prevState}`)
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