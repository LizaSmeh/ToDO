import { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const filtredTodos = todos.filter((task) =>
    showCompleted ? task.completed : !task.completed
  );

  return ( <>
  <label className="flex items-center gap-5 mb-4 text-lg sm:text-xl ">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted((prev) => !prev)}
          className="h-7 w-7 text-blue-500"
        />
        {showCompleted ? "Показать невыполненные" : 'Показать выполненные' }
      </label>
 
    <div className="flex gap-3 mb-4 w-full">
      

      <ul className="divide-y divide-gray-200 rounded-lg shadow-sm w-full">
        {filtredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
     </>
  );
};
