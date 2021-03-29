
const criarItem = () => {
    const item = document.createElement('label');
    item.classList.add(todoItem);
    item.innerHTML = `
        <input type="checkbox">
        <div>teste iten 1</div>
        <input type="button" value="X">
    `

    document.getElementById('todoList').appendChild(item);
}
