"use client";

import React, { useState } from "react";
import TodoItem from "@/components/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // addTodo 함수는 입력값을 이용하여 새로운 할 일을 목록에 추가하는 함수입니다.
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // toggleTodo 함수는 체크박스를 눌러 할 일의 완료 상태를 변경하는 함수입니다.
  const toggleTodo = (id) => {
    // 할 일 목록에서 해당 id를 가진 할 일의 완료 상태를 반전시킵니다.
    setTodos(
      // todos.map((todo) =>
      //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
      // )
      // ...todo => id: 1, text: "할일1", completed: false
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  // deleteTodo 함수는 할 일을 목록에서 삭제하는 함수입니다.
  const deleteTodo = (id) => {
    // 해당 id를 가진 할 일을 제외한 나머지 목록을 새로운 상태로 저장합니다.
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  // deleteAllTodos 함수는 모든 할 일을 목록에서 삭제하는 함수입니다.
  const deleteAllTodos = () => {
    setTodos([]);
  };

  // 컴포넌트를 렌더링합니다.
  return (
    <div className="mx-auto max-w-sm p-5 bg-white rounded-lg shadow">
      <h1 className="text-center text-2xl font-bold">Todo List</h1>
      <input
        type="text"
        className="w-full p-1 mb-2 text-black border-2 border-gray-200 rounded shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button
        className="w-full p-1 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:translate-y-1 transform transition mr-2"
        onClick={addTodo}
      >
        Add Todo
      </button>

      <button
        className="w-full p-1 bg-red-500 text-white rounded hover:bg-red-600 active:translate-y-1 transform transition"
        onClick={deleteAllTodos}
      >
        Delete All
      </button>
      <ul className="list-none p-0">
        {/* TodoItem 컴포넌트 렌더링 */}
      </ul>
      {todos.length === 0 && (
      <div className="text-center mt-5">
        <img src="empty-list-image.png" alt="Empty list" className="mx-auto w-1/2" />
        <p className="text-lg mt-2">할 일이 없습니다.</p>
      </div>
      
      )}
    </div>
  );
};

export default TodoList;
