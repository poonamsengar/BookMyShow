let loginBtn = document.getElementById("btn");
const favDialog = document.getElementById('favDialog');
const closeBtn = favDialog.querySelector('#closeBtn');
loginBtn.addEventListener('click', () => {
  favDialog.showModal(); 
});
closeBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(); // Have to send the select box value here.
});
