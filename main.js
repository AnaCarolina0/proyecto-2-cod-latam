const  menuItem = document.querySelectorAll(".menu-item")
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function (){
    document.body.classList.toggle('mobile-menu')
})


menuItem.forEach(function(item) {
item.addevenLiterner('click', function(e){
    const curretItem = document.querySelector('active')
    curretItem.classList.add('active')
  })
  
})



