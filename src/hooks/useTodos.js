import { useCallback, useEffect, useState } from "react";
import { ref, onValue, push, update, remove } from "firebase/database";
import { db } from "../firebase";

// function snapshotToArray(snapshot) {
//   const val = snapshot.val();
//   if (!val) return [];
//   return Object.entries(val).map(([id, {...data}]) => (id, {...data }));
  
// }

function snapshotToArray(snapshot) {
  const val = snapshot.val();
  if (!val) return [];
  return Object.entries(val).map(([id, data]) => ({ id, ...data }));
}


export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        setLoading(true);
        setError(null);

        const todosRef = ref(db, 'todos');
        
        return onValue(todosRef, (snapshot) => {
              const loadedTodos = snapshotToArray(snapshot);
              
              setTodos(loadedTodos);
              setLoading(false);
              
            }, 
            (err) => {
                console.error('Error:', err)
                setError(err);
                setLoading(false);
            }
        );

     }, []);

     const addTodo = useCallback(async (task) => {
        const todosRef = ref(db, 'todos');
        const newTodo = {text: task.trim(), completed: false, createdAt: Date.now()};

        try {
            await push(todosRef, newTodo)
        } catch(err) {
            console.error('addTodos:', err);
            setError(err)
        }
     }, [])

     const editTodo = useCallback(async (id, newTack) => {
        const todosRef = ref(db, `todos/${id}`);

        try {
            await update(todosRef, {text: newTack.trim()})
        } catch(err) {
            console.error('editTodos:', err);
            setError(err)
        }
     }, [])


      const toggleTodo = useCallback(async (id, currentCompleted) => {
        const todosRef = ref(db, `todos/${id}`);

        try {
            await update(todosRef, {completed: !currentCompleted})
        } catch(err) {
            console.error('toggleTodos:', err);
            setError(err)
        }
     }, [])

     const deleteTodo = useCallback(async (id) => {
        const todosRef = ref(db, `todos/${id}`);

        try {
            await remove(todosRef)
        } catch(err) {
            console.error('deleteTodos:', err);
            setError(err)
        }
     }, [])

       return {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
      };
}