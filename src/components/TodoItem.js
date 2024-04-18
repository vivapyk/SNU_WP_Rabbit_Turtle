import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // todo 객체 대신 todo.id를 전달
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span
        className={`flex-1 ml-2 ${todo.completed ? "line-through" : ""}`}
      >
        {todo.text}
      </span>
      <button
        className="bg-red-500 text-white p-1 rounded hover:bg-red-600 active:translate-y-1 transform transition"
        onClick={() => onDelete(todo.id)} // todo 객체 대신 todo.id를 전달
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
