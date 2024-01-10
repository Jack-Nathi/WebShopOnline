const boxShadows = document.querySelector(".TopBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    boxShadows.style.boxShadow = "15px 0px 5px gray";
  } else {
    boxShadows.style.boxShadow = "none";
  }
});

function sidebar() {
  const contentElement = document.querySelector(".drawer-img");

  contentElement.classList.add("drawer-show");
}
