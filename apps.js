const itemHeader = document.querySelectorAll('.accordion-header');
const itemBody = document.querySelectorAll('.accordion-item-body');
// const arrowDown = document.querySelectorAll('.arrow-down');


for(i=0; i<itemHeader.length; i++){
  itemHeader[i].addEventListener("click", function(){
    this.classList.toggle('active');
   
//  arrowDown.classList.toggle('active');
    
  })
}                                         

