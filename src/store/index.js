

import {createStore} from 'vuex';

//Create Store
const stores = createStore({
    
state :{

    todos:[]
},

getters :{
    allTodos: (state)=>{
        return state.todos
    }
},

actions :{
    async fetchTodos({commit}){
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos');
        const todoss = await response.json()
        commit('setTodos', todoss)

    },
    async addTodo({commit}, title){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            mode:'cors',
            body: JSON.stringify({
              title: title,
              completed: false
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
        const result = await response.json()
        


        
          commit('newTodo', result)


    },
    async deleteTodo({commit}, id){
        console.log(id)
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
          })
          commit('removeTodo', id);

    },
    async filterTodo({commit},event){
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);

        const response =  await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        const todoss = await response.json()
        commit('setTodos', todoss)
    },

    async updateTodo({commit}, updTodo){
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,{
            method: 'PUT',
            mode:'cors',
            body: JSON.stringify({
              updTodo
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
        const todoss = await response.json()
        console.log(todoss)
        commit('updateTodo', todoss);

    }
},

mutations :{
    setTodos:(state, todos) => {state.todos = todos},
    newTodo:(state, todo) => {state.todos.unshift(todo)},
    removeTodo:(state, id) => {
        const num = parseInt(id)
        state.todos.splice(num-1,1)
    },
    updateTodo:(state, todoss) =>{
        const index = state.todos.findIndex(todo => todo.id === todoss.id);
        console.log(index)
        if (index !== -1){
            state.todos[index]= todoss;
        }
    }
}
})

export default stores