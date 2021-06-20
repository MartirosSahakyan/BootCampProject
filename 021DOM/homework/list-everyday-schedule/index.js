const listItems = document.querySelectorAll(".list-item");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let currItemId = item.getAttribute("data-id");
    if (currItemId === "1") {
      item.style.textDecoration = "line-through";
    } else {
      let prevItem = document.querySelector(`[data-id = "${currItemId - 1}"]`);
      if (prevItem.style.textDecoration === "line-through") {
        item.style.textDecoration = "line-through";
      }
    }
  });
});
