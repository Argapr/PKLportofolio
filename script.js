// dropdown
function toggleDropdown() {
    var burgerIcon = document.getElementById("burgerIcon");
    burgerIcon.classList.toggle("active");

    var dropdown = burgerIcon.parentElement;
    dropdown.classList.toggle("active");
  }