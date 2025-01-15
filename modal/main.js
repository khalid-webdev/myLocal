const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('.open_modal');
const cancelModal = document.getElementById("cancelModal");

overlay.style.display = "none";
openModal.addEventListener("click", () => {
  overlay.style.display = "block";
});
cancelModal.addEventListener("click", () => {
  overlay.style.display = "none";
});
