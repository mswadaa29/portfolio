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
