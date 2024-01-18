function toggleDropdown() {
    var burgerIcon = document.getElementById("burgerIcon");
    burgerIcon.classList.toggle("active");

    var dropdown = burgerIcon.parentElement;
    dropdown.classList.toggle("active");
  }

  document.getElementById('input').addEventListener('change', () => {
    if (document.body.className.indexOf('dark') === -1) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
})