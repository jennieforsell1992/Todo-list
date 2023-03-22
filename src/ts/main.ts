import type { IBucketListItem } from "./models/BucketList";
import { BucketListItem } from "./models/BucketList";

let myBucketList: IBucketListItem[] = [];
let ulList: HTMLUListElement = document.getElementById(
  "ulList"
) as HTMLUListElement;

window.onload = function () {
  displayTodo();
};

function displayTodo() {
  ulList.innerHTML = "";

  console.log(myBucketList);
  for (let i = 0; i < myBucketList.length; i++) {
    let newLiList = document.createElement("li");
    let textSpan = document.createElement("span");

    newLiList.classList.add("newLiListStyle");
    textSpan.classList.add("textSpanStyle");

    textSpan.innerHTML = myBucketList[i].task;

    let todoList = myBucketList[i];

    ulList.appendChild(newLiList);
    newLiList.appendChild(textSpan);

    let listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    listCheckbox.classList.add("listCheckboxStyle");
    newLiList.appendChild(listCheckbox);
    listCheckbox.addEventListener("click", () => {
      myCheckboxList(listCheckbox, textSpan, todoList);
    });

    let listButton = document.createElement("button");
    listButton.classList.add("listButtonStyle");
    newLiList.appendChild(listButton);
    listButton.innerHTML = "ta bort!";
    listButton.addEventListener("click", () => {
      changeMyBucketList(todoList);
    });
  }
}

function myCheckboxList(
  listCheckbox: HTMLInputElement,
  textSpan: HTMLSpanElement,
  todoList: IBucketListItem
) {
  if (listCheckbox.checked) {
    textSpan.innerHTML = todoList.task + " " + ":Klar";
  } else {
    return (textSpan.innerHTML = todoList.task);
  }
}

function changeMyBucketList(todoList: IBucketListItem) {
  let index = myBucketList.indexOf(todoList);
  myBucketList.splice(index, 1);

  displayTodo();
}

let inputTask = document.getElementById("inputTask") as HTMLInputElement;
inputTask.classList.add("inputTaskStyle");

let inputButton = document.getElementById("inputButton") as HTMLButtonElement;
inputButton.classList.add("inputButtonStyle");
inputButton.innerHTML = "Lägg till Todo!";
inputButton.addEventListener("click", addItemToList);

function addItemToList(e: any) {
  e.preventDefault();
  let inputValue = inputTask.value;
  if (inputValue !== "") {
    let addToList = new BucketListItem(inputValue, false);
    myBucketList.push(addToList);
    displayTodo();
  }
}
