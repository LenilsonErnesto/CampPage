const btn= document.querySelector('.form-btn');
const form= document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
     passRegex();
      nameRegex();
 }
);

 function passRegex(){
  const password= document.querySelector('#password').value;
  const link= "https://subsplease.org/";
  const regex= /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
  let passUser= "Les12345";
  validation= regex.test(password);
  
  if (validation) {
    btn.textContent= "Logando...";
    window.location.href= link;
  }
   else{ alert("Senha incorreta")
    
  }
}

function nameRegex(){
 const name = document.querySelector('#name').value;
 const regex=/^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
 let nameUser= "lenilson";
  validation= regex.test(name);
 
 if (validation) {
   alert("correto");
   
 } else {
   alert("Verifique o nome");
  }
}