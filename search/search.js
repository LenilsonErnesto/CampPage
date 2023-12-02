
const campingList=[
   {
     id:0,
     name:"Mount Ulap",
     image:"https://thumbs2.imgbox.com/d9/83/kNIyEJPp_t.png",
     alt:"Mount Ulap",
     desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon."
   },
   {
     id:1,
     name:"Calaguas Islands",
     image:"https://thumbs2.imgbox.com/63/0f/XQXLWRqN_t.jpg",
     alt:"Calagus Islands",
     desc:"A paradise of islands that can rival the white sand beauty of Boracay."
   },
      {
     id:2,
     name:"Onay Beach",
     image:"https://thumbs2.imgbox.com/28/f6/6s8IosT1_t.jpg",
     alt:"Onay Beach",
     desc:"This is one of the best beach camping sites, beautiful and pristine."
   },
      {
     id:3,
     name:"Seven Sisters Waterfall",
     image:"https://thumbs2.imgbox.com/d4/65/iM4cOEbv_t.jpg",
     alt:"Seven Sisters Waterfall",
     desc:"The Seven Sisters is the 39th tallest waterfall in Norway."
   },
      {
     id:4,
     name:"Latik Riverside",
     image:"https://thumbs2.imgbox.com/de/13/M16Xudkc_t.jpg",
     alt:"Latik Riverside",
     desc: "Philippines is one of the most dazzling countries in all of Asia."
   },
      {
     id:5,
     name:"Buloy Springs",
     image:"https://thumbs2.imgbox.com/65/46/omRwvNZp_t.jpg",
     alt:"Buloy Springs",
     desc: "This is one of the best beach camping sites, beautiful and pristine."
   },
  ];
  
  window.addEventListener("DOMContentLoaded", () =>{
    campingListItem();
  });
  
  function campingListItem(){
  const sectionCreate = document.querySelector('article');
   const camping= campingList.map(
     (list) => {
      return `
       <section>
       <a href="https://imgbox.com/iM4cOEbv" target="_blank">
        <img src=${list.image} alt=${list.name} class="section-img"/></a>
       <div class="section-text">
         <h4>${list.name}</h4>
          <p>${list.desc}</p>
       </div>
       <button class="section-btn">View campground</button>
       </section>  `;
   }).join('');
   
   sectionCreate.innerHTML= camping;
  }
  
  function pageChange(){
    const btn= document.querySelector('.section-btn');
    const link = "";
    if(true){
      window.location.href= link;
    }
  }