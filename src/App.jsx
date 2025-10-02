import './App.css'
import {useTodos} from "./hooks/useTodos";
import {TodoList} from "./components/TodoList";
import {TodoForm} from './components/TodoForm'
import { TodoItem } from './components/TodoItem';



function App() {
  const {
    todos,
    // loading,
    error,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
   
  } = useTodos();

  return (
    <div className="w-full max-w-md mx-auto mt-6 sm:mt-10 p-4 sm:p-6 border border-gray-200 rounded-lg shadow">
      
      <h1 className="text-red-500 font-bold text-2xl sm:text-3xl text-center mb-6">
        📋 Todo 
      </h1>

     <TodoForm onAdd={addTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        
      />

      {error && (
        <div className="mt-4 text-red-600 font-medium text-center">
          Ошибка: {error.message}
        </div>
      )}

      <footer className="mt-6 text-center text-sm text-gray-500">
        Всего задач: {todos.length}
      </footer>
    </div>
  );
}

export default App
