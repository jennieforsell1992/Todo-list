import type { IBucketListItem } from "./models/BucketList";
import { BucketListItem } from "./models/BucketList";

let bucketList: IBucketListItem[] = [];
let items: HTMLUListElement = document.getElementById(
  "ulList"
) as HTMLUListElement;

window.onload = function () {
  displayTodo();
};

function displayTodo() {
  items.innerHTML = "";

  console.log(bucketList);
  for (let i = 0; i < bucketList.length; i++) {
    let item = document.createElement("li");
    let itemText = document.createElement("span");

    item.classList.add("newLiListStyle");
    itemText.classList.add("textSpanStyle");

    itemText.innerHTML = bucketList[i].item;

    let todoList = bucketList[i];

    items.appendChild(item);
    item.appendChild(itemText);

    let listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    listCheckbox.classList.add("listCheckboxStyle");
    item.appendChild(listCheckbox);
    listCheckbox.addEventListener("click", () => {
      myCheckboxList(listCheckbox, itemText, todoList);
    });

    let listButton = document.createElement("button");
    listButton.classList.add("listButtonStyle");
    item.appendChild(listButton);
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
    textSpan.innerHTML = todoList.item + " " + ":Klar";
  } else {
    return (textSpan.innerHTML = todoList.item);
  }
}

function changeMyBucketList(todoList: IBucketListItem) {
  let index = bucketList.indexOf(todoList);
  bucketList.splice(index, 1);

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
    bucketList.push(addToList);
    displayTodo();
  }
}
