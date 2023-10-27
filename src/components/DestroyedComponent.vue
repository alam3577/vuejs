<template>
    <div>
       <h1>Hello, I am Destroyed Component and I am under the water</h1> 
    </div>
</template>
<script>
 export default {
    name: "DestroyedComponent",
    destroyed: function(){
        alert('Marne k baad yehe bolna hai ki, 25 deen may paisa double nahi hota, Sab mil k hamko pagal bana rahe hai M********** k bache',)

    },
    beforeDestroy: function(){
        alert('Marne se pahle ye bolna chahata hu, 25 deen may paisa double')
    }
 }
</script>