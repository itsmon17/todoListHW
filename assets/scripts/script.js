const input = document.querySelector("#inp__text");
const addButton = document.querySelector("#add");
const listTodo = document.querySelector(".todo__list");
//////
const renderTodoFunc = (text) => {
    if (text.trim()) {
        const li = document.createElement("li");
        const divCheckBoxTitle = document.createElement("div");
        const inputCheckbox = document.createElement("input");
        const p = document.createElement("p");
        const divButtonEditAndDelete = document.createElement("div");
        const buttonDelete = document.createElement("button");
        const buttonEdit = document.createElement("button");

        divCheckBoxTitle.className = "inp__checkbox_title";
        inputCheckbox.type = "checkbox";
        inputCheckbox.id = "checkbox";
        p.className = "title";
        p.innerText = text;
        divCheckBoxTitle.append(inputCheckbox, p);

        divButtonEditAndDelete.className = "delete_edit__button";
        buttonDelete.innerText = "Delete";
        buttonEdit.innerText = "Edit";
        divButtonEditAndDelete.append(buttonDelete, buttonEdit);

        li.append(divCheckBoxTitle, divButtonEditAndDelete);

        listTodo.append(li);

        buttonDelete.addEventListener("click", () => {
            listTodo.removeChild(li);
        });

        inputCheckbox.addEventListener("click", () => {
            p.style.textDecoration = inputCheckbox.checked
                ? "line-through"
                : "none";
        });

        buttonEdit.addEventListener("click", () => {
            const inputEdit = document.createElement("input");
            const addEditTitleBtn = document.createElement("button");

            addEditTitleBtn.innerText = "Add";
            addEditTitleBtn.className = "edit__add_button";

            divCheckBoxTitle.removeChild(p);

            inputEdit.value = p.innerText;

            divCheckBoxTitle.append(inputEdit, addEditTitleBtn);

            addEditTitleBtn.addEventListener("click", () => {
                divCheckBoxTitle.removeChild(inputEdit);
                divCheckBoxTitle.removeChild(addEditTitleBtn);
                p.innerText = inputEdit.value;
                divCheckBoxTitle.append(p);
            });
        });
    }
};
//////
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderTodoFunc(input.value);
    input.value = "";
});