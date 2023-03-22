import type { IBucketListItem } from "./models/BucketList";
import { BucketListItem } from "./models/BucketList";

let bucketList: IBucketListItem[] = [];
let items: HTMLUListElement = document.getElementById(
  "ulList"
) as HTMLUListElement;

window.onload = function () {
  createHtmlBucketList();
};

function createHtmlBucketList() {
  items.innerHTML = "";
  for (let i = 0; i < bucketList.length; i++) {
    let item = document.createElement("li");
    let itemText = document.createElement("span");

    item.classList.add("newLiListStyle");
    itemText.classList.add("textSpanStyle");

    itemText.innerHTML = bucketList[i].item;

    let itemInBucketList = bucketList[i];

    items.appendChild(item);
    item.appendChild(itemText);

    let itemCheckbox = document.createElement("input");
    itemCheckbox.setAttribute("type", "checkbox");
    itemCheckbox.classList.add("listCheckboxStyle");
    item.appendChild(itemCheckbox);
    itemCheckbox.addEventListener("click", () => {
      checkboxBucketlist(itemCheckbox, itemText, itemInBucketList);
    });

    let deleteItemButton = document.createElement("button");
    deleteItemButton.classList.add("listButtonStyle");
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
inputItem.classList.add("inputTaskStyle");

let inputItemButton = document.getElementById(
  "inputButton"
) as HTMLButtonElement;
inputItemButton.classList.add("inputButtonStyle");
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
