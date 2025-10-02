import { useState } from "react";

export const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
console.log(todo)
  const saveEdit = () => {
    const trimmed = editText.trim();
    
    if (!trimmed) return;
    if (trimmed !== todo.text) {
      onEdit(todo.id, trimmed)};
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col w-full sm:flex-row sm:items-center gap-4 py-4 px-4 border-b border-gray-200">
      
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => onToggle(todo.id, todo.completed)}
          className="h-5 w-5 text-blue-500"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
              if (e.key === "Escape") setIsEditing(false);
            }}
            className="flex-1 px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-lg sm:text-base"
            autoFocus
          />
        ) : (
          <span
            className={`flex-1 break-words text-lg sm:text-base ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-3 justify-end w-full sm:w-auto mt-2 sm:mt-0">
        {isEditing ? (
          <>
            <button
              onClick={saveEdit}
              className="flex-1 sm:flex-none px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg"
            >
              💾
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 sm:flex-none px-5 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-lg"
            >
              ✖️
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 sm:flex-none px-5 py-3 text-blue-500 hover:text-blue-700 text-lg"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="flex-1 sm:flex-none px-5 py-3 text-red-500 hover:text-red-700 text-lg"
            >
              🗑
            </button>
          </>
        )}
      </div>
    </li>
  );
}