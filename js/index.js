const naranjaImg = document.querySelector(`.Nav-btn`)

window.addEventListener('scroll',()=>{
	console.clear()
	const { scrollY } = window
	naranjaImg.style.transform = `rotate(${scrollY}deg)`})
    
	
	
	const menuBtn = document.querySelector (`.Btn-mobile`)
    console.log (menuBtn)
    const navMobile = document.querySelector (`.Nav-mobile`)
    console.log (navMobile)
    
    menuBtn.addEventListener(`click`,() => {
        navMobile.classList.toggle(`isActive`)
    })



$(`.Container-h1`).mouseover(function(){
    
    let i = $(`.Container-h1`).index($(this))


    $(`.S-img`).removeClass(`isActive`)
    $(`.S-img`).eq(i).addClass(`isActive`)

    
    $(`.Container-h1`).css("opacity","0.1");
        $(this).css("opacity","1");
    
})

$(".Container-h1").mouseout(function(){
    
    $(`.S-img`).removeClass(`isActive`)

    $(`.Container-h1`).css("opacity","1");
    $(this).css("opacity","1");
    
  });




