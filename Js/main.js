var lilar = document.querySelectorAll("a");

lilar.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = "blue";
  });
});
