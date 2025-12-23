import { inputArr } from "./input.js";

const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const showTask = document.querySelector('.todo-list');

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') return; // prevent empty input

  inputArr.push(value);
  input.value = ''; // clear input box

  renderTasks(); // call function to render
});

function renderTasks() {
  showTask.innerHTML = ''; // clear list

  inputArr.forEach((task, index) => {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    item.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" data-index="${index}">✖</button>
    `;
    showTask.appendChild(item);
  });
}

// delete button event (event delegation)
showTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const index = event.target.dataset.index;
    inputArr.splice(index, 1); // remove from array
    renderTasks(); // re-render list
  }
});
