//Получение элемента

const taskInput = document.getElementById("taskInput");
const AddTaskBtn = document.getElementById("AddTaskBtn");
const taskList = document.getElementById("taskList");

//Добавление задачи
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML = `<span>${taskText}</span> <button type='button' class='delete-btn'>Выполнил</button>`;


    //Добавление функциональности задачи
    taskItem.addEventListener ('click', (e) => {
        if (e.target.tagName !== 'BUTTON'){
            taskItem.classList.toggle("completed");
        }
    });

    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";

}

AddTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});