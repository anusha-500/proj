<template>
<div id="app">
Enter Value:<input type="text" v-model="message" placeholder="enter value" required>
</div>
</template>
<script>
export default {
name: "Question6AA",
data() {
    return{
    message:"",
    }
},
watch: {
message(newvalue, oldvalue) {
console.log("newvalue:",newvalue);
console.log("oldvalue:",oldvalue);
}
}
}
</script>