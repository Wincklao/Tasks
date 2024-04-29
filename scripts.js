const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const ulTask = document.querySelector('.list-tasks');

let list = []

function addTask() {

    if(input.value === "") {
        alert("Por favor escreva algo!!")
    } else {

        list.push({
            task: input.value,
            compreted: false
        })
        input.value = ''

        showTask();
    }
};

function showTask() {
    let newTask = ''
    list.forEach((item, index) => {
        newTask = newTask + `

            <li class = "task ${item.compreted && "done"}">
                <img src="./imgs/icon_certificado-removebg-preview.png" alt="check-na-tarefa" onclick = "checkTask(${index})">
                <p>${item.task}</p>
                <img src="./imgs/icon_lixeira-removebg-preview.png" alt="remove-tarefa" onclick = "deleteItem(${index})">
            </li>

            `
    })
    
    ulTask.innerHTML = newTask;

    localStorage.setItem('list', JSON.stringify(list))
}

function checkTask(index) {
    list[index].compreted = !list[index].compreted

    showTask();
}

function deleteItem(index) {
    list.splice(index, 1)

    showTask();
}

function rechargeScreen() {
    const tasksLocalStorage = localStorage.getItem('list')
    if (tasksLocalStorage) {
        list = JSON.parse(tasksLocalStorage)
    }

    showTask();
};


rechargeScreen();
button.addEventListener('click', addTask);  