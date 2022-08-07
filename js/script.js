const minilinks = document.querySelector('.mini-links');
const dropdown =document.querySelector('.dropdown');

dropdown.addEventListener('click', function() {
    minilinks.classList.toggle('show');
   
    
});


const btn1 = document.querySelector('.burger');
const btn2 = document.querySelector('.cancel');
const btns =document.querySelector('.hidden-btn');
const list = document.querySelector('.move-top');


btns.addEventListener('click', function() {
   const burger =  btn2.classList.toggle('show');
   const cancel= btn1.classList.toggle('hide');
if(burger){
 list.classList.add('add') = '0%';
}else{
    list.classList.remove('add') = '-100%';
}
    console.log('im working')
    
});
// // console.log(btndiv)