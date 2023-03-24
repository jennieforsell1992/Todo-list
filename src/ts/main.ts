import type { IBucketListItem } from "./models/BucketList";
import { BucketListItem } from "./models/BucketList";

let bucketList: IBucketListItem[] = [];
const form: HTMLFormElement = document.getElementById(
  "form"
) as HTMLFormElement;
form.classList.add("form");
let items: HTMLUListElement = document.getElementById(
  "ulList"
) as HTMLUListElement;
items.classList.add("ul-items");

window.onload = function () {
  createHtmlBucketList();
};

function createHtmlBucketList() {
  items.innerHTML = "";
  for (let i = 0; i < bucketList.length; i++) {
    let item = document.createElement("li");
    let itemText = document.createElement("span");

    item.classList.add("ul-items__item");
    itemText.classList.add("ul-items__item--itemText");

    itemText.innerHTML = bucketList[i].item;

    let itemInBucketList = bucketList[i];

    items.appendChild(item);
    item.appendChild(itemText);

    let itemCheckbox = document.createElement("input");
    itemCheckbox.setAttribute("type", "checkbox");
    itemCheckbox.classList.add("ul-items__item--checkbox");
    item.appendChild(itemCheckbox);
    itemCheckbox.addEventListener("click", () => {
      checkboxBucketlist(itemCheckbox, itemText, itemInBucketList);
    });

    let deleteItemButton = document.createElement("button");
    deleteItemButton.classList.add("ul-items__item--btn");
    item.appendChild(deleteItemButton);
    deleteItemButton.innerHTML = "ta bort!";
    deleteItemButton.addEventListener("click", () => {
      deleteItemInBucketList(itemInBucketList);
    });
  }
}

function checkboxBucketlist(
  itemCheckbox: HTMLInputElement,
  itemText: HTMLSpanElement,
  itemInBucketList: IBucketListItem
) {
  if (itemCheckbox.checked) {
    itemText.innerHTML = itemInBucketList.item + " " + ":Klar";
  } else {
    return (itemText.innerHTML = itemInBucketList.item);
  }
}

function deleteItemInBucketList(itemInBucketList: IBucketListItem) {
  let index = bucketList.indexOf(itemInBucketList);
  bucketList.splice(index, 1);

  createHtmlBucketList();
}

let inputItem = document.getElementById("inputTask") as HTMLInputElement;
inputItem.classList.add("form__input");

let inputItemButton = document.getElementById(
  "inputButton"
) as HTMLButtonElement;
inputItemButton.classList.add("form__btn");
inputItemButton.innerHTML = "Lägg till Todo!";
inputItemButton.addEventListener("click", addItemToBucketlist);

function addItemToBucketlist(e: any) {
  e.preventDefault();
  let inputValue = inputItem.value;
  if (inputValue !== "") {
    let addItem = new BucketListItem(inputValue, false);
    bucketList.push(addItem);
    createHtmlBucketList();
  }
}
