<template>
<div id="app">
<b-form-input v-model="Uppercase_letters" placeholder="Enter lowercase letters" required></b-form-input>
<b-button @click=uppercase() >Click</b-button>
<b-form-input v-model="res" placeholder="Uppercase" required></b-form-input>
</div>
</template>
<script>
export default {
name: "Question6AA",
data() {
    return{
    message:"",
    Uppercase_letters:"",
    res:""
    }
},
watch: {
    Uppercase_letters:{
handler(newvalue, oldvalue) {
console.log("newvalue:",newvalue);
console.log("oldvalue:",oldvalue);
}
},
},
methods:{
uppercase(){
this.res = this.Uppercase_letters.toUpperCase();
},
}
}
</script>