let inp = document.querySelector("input");
let btn = document.querySelector(".add");
let ListItems = document.querySelector("ul");
let box = document.querySelector(".box");
let list = document.querySelector(".list");
let h = document.querySelector("h2");

btn.addEventListener("click", function () {
  if (inp.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    inp.value = "";
    li.classList.add("li");

    let removed = document.createElement("div");
    removed.innerHTML = `<span> <button class="remove">X</button></span>`;
    removed.classList.add("remove");
    li.append(removed);

    ListItems.append(li);
    console.log(li);

    removed.addEventListener("click", function (event) {
      event.target.closest("li").remove();
    });
  } else {
    h.innerHTML = "Add task";
    h.style.color = "red";
  }
});

ListItems.addEventListener("click", function (event) {
  event.target.classList.toggle("checked");
});
