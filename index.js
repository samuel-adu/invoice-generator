const washCar = document.getElementById("wash-car");
const mowLawn = document.getElementById("mow-lawn");
const pullWeed = document.getElementById("pull-weed");
const selectedTask = document.getElementById("selected-task");
const taskCost = document.getElementById("task-cost");
const totalCost = document.getElementById("total-cost");
let total = 0;

washCar.addEventListener("click", function () {
  selectedTask.innerHTML += `<p>Wash Car</p>`;
  taskCost.innerHTML += `<p><span class="dollar-sign">$</span>${10}</p>`;
  total += 10;
  totalCost.innerHTML = "$" + total;
});

mowLawn.addEventListener("click", function () {
  selectedTask.innerHTML += `<p>Mow Lawn</p>`;
  taskCost.innerHTML += `<p><span class="dollar-sign">$</span>${20}</p>`;
  total += 20;
  totalCost.innerHTML = "$" + total;
});

pullWeed.addEventListener("click", function () {
  selectedTask.innerHTML += `<p>Pull Weed</p>`;
  taskCost.innerHTML += `<p><span class="dollar-sign">$</span>${30}</p>`;
  total += 30;
  totalCost.innerHTML = "$" + total;
});

totalCost.innerHTML += "$" + total;
