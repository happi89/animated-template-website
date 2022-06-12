AOS.init({
  delay: 0,
  duration: 1000,
});
function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
}
