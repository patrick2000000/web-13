/* ================= MENU TOGGLE ================= */
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.classList.toggle("active");
};


/* ================= PAGE SWITCH ================= */
function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  document.getElementById(id).classList.add("active-page");

  // close menu after clicking (mobile friendly)
  menu.classList.remove("active");
}


/* ================= COUNTER ANIMATION ================= */
window.addEventListener("load", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    counter.innerText = "0";

    let target = +counter.getAttribute("data-target");
    let current = 0;

    let speed = 20;

    function update() {
      current += Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = current;
        setTimeout(update, speed);
      } else {
        counter.innerText = target;
      }
    }

    update();
  });
});


/* ================= DEPARTMENT SWITCH ================= */
function showDepartment(id) {
  const contents = document.querySelectorAll(".department-content");

  contents.forEach(content => {
    content.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  let desc = document.getElementById("level-desc");

  if (desc) {
    if (id === "level") {
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }
  }
}