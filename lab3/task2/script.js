'use strict';

const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-item__checkbox';

  const label = document.createElement('span');
  label.className = 'todo-item__label';
  label.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'todo-item__delete';
  delBtn.innerHTML = '&#128465;';

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  checkbox.addEventListener('change', () => {
    label.classList.toggle('todo-item__label--done', checkbox.checked);
  });

  label.addEventListener('click', () => {
    checkbox.click();
  });

  delBtn.addEventListener('click', () => {
    li.remove();
  });
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  addTask(text);
  taskInput.value = '';
  taskInput.focus();
});
