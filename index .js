/*Adicionar Header em cada página*/
window.addEventListener("click", 
()=>{
const header= document.querySelector('header');
  header.innerHTML= 
  `<div class="header-svg">
    <img src="./assets/Logo.svg"/>
  </div>
  <div class="headerMenu-icon">
    <i class="ph ph-list"></i>
  </div>`
});

/*Rederecionamento na página index para Camps*/
const btn= document.querySelector('btn-index').addEventListener(
  "click", () =>{
    const link = "./search/search.html";
    if(true){
      window.location.href= link;
    }
  });
