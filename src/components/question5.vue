<template>
<div>
<b-form-input v-model="product_name" placeholder="product name" required></b-form-input>
<b-form-input v-model="product_price" placeholder="product price" required></b-form-input>
<b-form-input v-model="product_category" placeholder="product category" required></b-form-input>
<br><br>
<b-button @click=add() >Add</b-button>
<b-table striped hover :items="products" :fields="fields">
</b-table>
</div>
</template>
<script>
export default {
name:"Question5A",
data() {
return {
products: [
{ name: "Sofa", price: 15000, category: 'Furniture' },
{ name: "Mobiles", price: 30000, category: 'electronics' },
{ name: "shoes", price: 1500, category: 'Footware' },
{ name: "books", price: 30, category: 'stationary' },
],
fields:["name","price","category"],
product_name:'',
product_price:'',
product_category:''
}
},
methods:{
add(){
this.products.push({name:this.product_name, price:this.product_price ,category:this.product_category})
}
}
}
</script>