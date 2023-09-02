const gradientDivs = document.querySelectorAll(".gradient-border");
const liItems = document.querySelectorAll(".nacc li");

gradientDivs.forEach((div, index) => {
  div.addEventListener("click", () => {
    gradientDivs.forEach((d) => d.classList.remove("active"));
    liItems.forEach((li) => li.classList.remove("active"));

    div.classList.add("active");
    liItems[index].classList.add("active");
  });
});

gradientDivs[0].classList.add("active");
liItems[0].classList.add("active");
