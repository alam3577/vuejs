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
            <h3 style="border-bottom: 1px solid black;">Custom Directives</h3>
            <p>v- k sath jo v start hota hai wo directives hai, iska ek example dekhenge h5 ka size change kr k</p>
            <h5 v-size="'sm'">Custom Directives in vue js</h5>
            <h5 v-size="'md'">Custom Directives in vue js</h5>
            <h5 v-size="'xl'">Custom Directives in vue js</h5>
        </div>
    </div>
</template>
<script>
import SignInComponent from '@/components/SignInComponent.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';
export default {
    name: 'SettingsPage.vue',
    components: {
        SignInComponent,
        SignUpComponent,
    },
    data() {
        return {
            initialComponent: "SignInComponent"
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