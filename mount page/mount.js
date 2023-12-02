
let comments=[
  {
    id:0,
name:"Adam Jones",
date: "13h ago",
comment:"Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!",
},
{
  id:1,
name:"Isaac Dylan",
date:"1 day ago",
comment:"Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.",
},
{
  id:2,
name:"Hudson Luca",
date:"3 days ago",
comment:"Definitely recommend going there, not too far and not a lot of people to ruin the experience."
}
  ];
  
  function commentList(){
    const section= document.querySelector('.section-comment');
    const commentMap= comments.map(
      (list)=>{
       return `
         <div class="div-comment">
         <h5>${list.name}</h5>
         <span>${list.date}</span>
         <p>${list.comment}</p>
         </div>
       `;
      }).join('');
      section.innerHTML= commentMap;
  }
  commentList();
 
   /* Modal de adicionar comentários */ 
   const commentModal= document.querySelector('.divModal-comments');
   const divBtn= document.querySelector('.btn').addEventListener(
     "click",
   function (){
     const style= commentModal.style.display;
     if(style === "none"){
       commentModal.style.display= "flex";
     }
     else{commentModal.style.display="none";}
   });
   
   window.addEventListener("click", (e)=>{
     if(e.target === commentModal){
       commentModal.style.display="none";
     }
   });