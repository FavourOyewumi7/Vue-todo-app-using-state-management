<template>
    <div>
       <h1> Add Todo</h1>
       <div class="add">       
            <form @submit.prevent="onSubmit">
                <input type="text" v-model.lazy="title" placeholder="Add Todo..">
                <input type="submit" value="">
            </form>
        </div>

    </div>
    
</template>

<script>
import {store} from '../store.js'
// import {mapActions} from 'vuex'
export default {
    name:"AddTodo",
    data:()=>{
        return{
            title:'',
            store
        }
    },
    methods: {
        // ...mapActions(['addTodo']),
        onSubmit(){
            store.addTodos(this.title)
            this.title = '';
            
               
               
        }
    }
}
</script>
<style scoped>
    form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>