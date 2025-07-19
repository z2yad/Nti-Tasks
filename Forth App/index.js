const taskName = document.querySelector('.task_name');
const taskType = document.querySelector('.task_type');
const addTask = document.querySelector('.add_task');
const taskList = document.querySelector('.task_list');

addTask.addEventListener('click', () => {
    const name = taskName.value.trim();
    const type = taskType.value;

    if (name === '') {
        alert('Please enter a task name');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task_item');

    const spanName = document.createElement('span');
    spanName.classList.add('task_name');
    spanName.textContent = name;

    const spanType = document.createElement('span');
    spanType.classList.add('task_type');
    spanType.textContent = type;

    // Add color based on task type
    switch (type) {
        case "Task":
            spanType.style.color = "red";
            break;
        case "In Progress":
            spanType.style.color = "orange";
            break;
        case "Done":
            spanType.style.color = "green";
            break;
    }

    const spanDate = document.createElement('span');
    spanDate.classList.add('task_date');
    spanDate.textContent = new Date().toLocaleString();
    spanDate.style.marginLeft = '10px'; // Add some space between type and date
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete_task');
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Append all to li
    li.appendChild(spanName);
    li.appendChild(spanType);
    li.appendChild(spanDate);
    li.appendChild(deleteButton);

    // Append li to task list
    taskList.appendChild(li);

    // Clear input fields
    taskName.value = '';
    taskType.value = 'Task';
});
