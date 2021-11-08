const nav = document.getElementById("nav");
const navToggle = document.getElementById("mob-nav-toggle");
const overlay = document.getElementById("modal-overlay");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility == "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    overlay.removeAttribute("hidden");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    overlay.setAttribute("hidden", true);
  }
});
