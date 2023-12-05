/*Adicionar Header em cada página*/
window.addEventListener("click", 
()=>{
const header= document.querySelector('header');
  header.innerHTML= 
  `<div class="header-svg">
    <img src="./assets/Logo.svg"/>
  </div>
  <div class="dropMenu-icon">
    <i class="ph ph-list"></i>
  </div>`;

  const menu= document.querySelector('.dropMenu-icon');
  menu.innerHTML=
    ` <div class="dropdown">
    <button>Entrar</button>
    <button>Registrar</button>
    <div>`;
});
/*Rederecionamento para página de login*/
const btn= document.querySelector('.dropdown button').addEventListener(
  "click", () =>{
    const link = "./login/login.html";
    if(true){
      window.location.href= link;
    }
  });

/*Rederecionamento na página index para Camps*/
const btn= document.querySelector('btn-index').addEventListener(
  "click", () =>{
    const link = "./search/search.html";
    if(true){
      window.location.href= link;
    }
  });
