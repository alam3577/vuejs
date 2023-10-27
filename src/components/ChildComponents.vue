<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ JSON.stringify(name) }}</p>
        <br>
        <button @click="updateTitle()">Click</button>
        <button @click="updateTitle2()">Click2</button>
    </div>
</template>
<script>
  export default {
    name: 'ChildComponent',
    props: ["name", "title"],
    methods: {
      updateTitle(){
         this.$emit('changeTitle', 'parent is updated')
      },
      updateTitle2(){
         this.$emit('changeTitle2', 'parent is updated 2')
      }
    }
  }
</script>