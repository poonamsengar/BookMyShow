let loginBtn = document.getElementById("btn");
const favDialog = document.getElementById('favDialog');
const closeBtn = favDialog.querySelector('#closeBtn');
loginBtn.addEventListener('click', () => {
     favDialog.showModal(); 
     favDialog.style.marginTop='15rem'
});
closeBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(); // Have to send the select box value here.
});

var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById('passwordInput');
var submitInput = document.querySelector('.submitInput')

submitInput.addEventListener('click',function(e){
    e.preventDefault();
    const data={
        email:emailInput.value,
        password:passwordInput.value,
    }
    if(data.password== '12345'){
        alert("Congratulation Successful User 🎉")
        `<a href=""></a>`
    }else if(data.password=='1234567890@#'){
        alert('User Password Invalid 😥');
    }else{
        alert('please insert password 🤔');
    }
    
})