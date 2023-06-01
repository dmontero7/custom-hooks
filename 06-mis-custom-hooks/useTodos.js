import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init= () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [] , init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo =(todo)=>{
        const action ={
            type:'add',
            payload:todo
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) =>{
        console.log(id);
        const action ={
            type:'delete',
            payload:id
        }
        dispatchTodo(action);
    }

    const handleToggleTodo = (id) =>{
        console.log(id);
        const action ={
            type:'toggle',
            payload:id
        }
        dispatchTodo(action);
    }

  return {
    todos,
    todosCount:todos.length,
    pendingTodosCount:todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}