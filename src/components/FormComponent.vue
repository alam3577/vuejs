<template>
    <div>
        <div>
            <input v-model="signup.name" placeholder="Enter your name" type="text" name="" id="" />
            <input v-model="signup.email" placeholder="Enter your email" type="email" name="" id="" />
            <input v-model="signup.phone" placeholder="Enter your phone" type="number" name="" id="" />
        </div>
        <button @click="handleFormClick"> Submit </button>
    </div>
</template>
<script>
  export default{
    name: 'FormComponent',
    props: [],
    methods: {
        handleFormClick(){
            console.log(this.signup)
        }
    },
    data(){
        return{
            signup: {
                name: "",
                email: "",
                phone: "",
            }
        }
    },
    mounted: function(){
        console.log({ss: this.signup})
    }
  }
</script>