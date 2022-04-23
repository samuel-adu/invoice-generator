const washCar = document.getElementById("wash-car");
const mowLawn = document.getElementById("mow-lawn");
const pullWeed = document.getElementById("pull-weed");
const selectedTask = document.getElementById("selected-task");
const taskCost = document.getElementById("task-cost");
const totalCost = document.getElementById("total-cost");
const taskList = document.getElementById("task-list");
let total = 0;

washCar.addEventListener("click", function () {
  document.getElementById("task-list").innerHTML += `<li class="task-item">
    Wash Car <span class="remove-btn">Remove</span>
    <span class="dollar-sign">$</span>
    <span class="task-cost">10</span>
  </li>`;
  total += 10;
  totalCost.innerHTML = "$" + total;
});

mowLawn.addEventListener("click", function () {
  document.getElementById("task-list").innerHTML += `<li class="task-item">
    Mow Lawn <span class="remove-btn">Remove</span>
    <span class="dollar-sign">$</span>
    <span class="task-cost">20</span>
  </li>`;
  total += 20;
  totalCost.innerHTML = "$" + total;
});

pullWeed.addEventListener("click", function () {
  document.getElementById("task-list").innerHTML += `<li class="task-item">
    Pull Weed <span class="remove-btn">Remove</span>
    <span class="dollar-sign">$</span>
    <span class="task-cost">30</span>
  </li>`;
  total += 30;
  totalCost.innerHTML = "$" + total;
});
