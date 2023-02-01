<template>
  <div>
      Filter Todos:
      <select @change="filterTodo($event)">
          <option value="200">2</option>
          <option value="50">5</option>
          <option value="20">10</option>
         
      </select>
  </div>
</template>

<script>
// import {mapActions} from 'vuex';
import {store} from '../store.js'
export default {
    name:'FilterTodo',
    // methods:mapActions(['filterTodo']),
    data(){
      return {
        store
      }
    },
    methods:{
      filterTodo(event){
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        store.todo_count = limit
    }
    }
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>