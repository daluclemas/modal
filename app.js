const openbtn=document.getElementById('btn');
const closebtn=document.querySelector('.close');

const container=document.querySelector('.popup-container');

openbtn.addEventListener('click',()=>{
    container.classList.add('active');
});

closebtn.addEventListener('click',()=>{
    container.classList.remove('active');
});
