import { useState } from "react";

export const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 mb-6 w-full px-3 sm:max-w-3xl sm:mx-auto"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить задачу..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 text-lg"
      />
      <button
        type="submit"
        className="flex-shrink-0 w-full sm:w-auto py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-lg"
      >
        Добавить
      </button>
    </form>
  );
};
