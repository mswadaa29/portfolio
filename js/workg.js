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


const sliderImg = document.querySelectorAll('.Slider-img')
const sliderBtn = document.querySelectorAll('.Slider-btn')
const sliderNext = document.querySelector('.next')
const sliderPrev = document.querySelector('.prev')

let foto = 0 
console.log( foto )

sliderImg[foto].classList.add('isActive')
sliderBtn[foto].classList.add('isActive')


sliderNext.addEventListener('click',()=>{
	
	foto++

	if( foto >= 3 ){
		foto = 0
	}
	
	sliderImg.forEach(( eachImg , j )=>{
		sliderImg[j].classList.remove('isActive')
	})
	sliderImg[foto].classList.add('isActive')

	sliderBtn.forEach(( eachBtn , j )=>{
		sliderBtn[j].classList.remove('isActive')
	})
	sliderBtn[foto].classList.add('isActive')

})

sliderPrev.addEventListener('click',()=>{
	
	foto--

    if( foto <= -1 ){
        foto = 2
    }
	
	sliderImg.forEach(( eachImg , j )=>{
		sliderImg[j].classList.remove('isActive')
	})
	sliderImg[foto].classList.add('isActive')

	sliderBtn.forEach(( eachBtn , j )=>{
		sliderBtn[j].classList.remove('isActive')
	})
	sliderBtn[foto].classList.add('isActive')

})

