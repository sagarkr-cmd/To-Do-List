function addTask() {
    let taskinput = document.getElementById("taskinput");
    let taskText = taskinput.value.trim();

    if (taskText === "") {
        alert("please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item";

    let span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-small";
    completeBtn.innerText = "Done";
    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-small";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    taskinput.value = "";
}
