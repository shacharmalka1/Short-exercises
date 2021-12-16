let count = 0;
document.getElementById("button").addEventListener("click", () => {
  document.getElementById("count").textContent = `count:${count++}`;
});
