function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn',)) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn1',)) {

    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown1 = dropdowns[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
}