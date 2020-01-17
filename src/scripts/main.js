
// logo follows cursor
const logoTags = document.querySelectorAll('section.logo-interaction div')
const areaTag = document.querySelector('section.logo-interaction')


let w = areaTag.clientWidth
let h = areaTag.clientHeight


logoTags.forEach(tag => {
  let mouseX = w / 2
  let mouseY = h / 2
  
  let logoX = w / 2
  let logoY = h / 2

  let speed = parseFloat(tag.getAttribute("data-speed"))

  function animate() {
    let distX = mouseX - logoX
    let distY = mouseY - logoY

    logoX = logoX + (distX * speed)
    logoY = logoY + (distY * speed)


    tag.style.left = logoX + 'px'
    tag.style.top = logoY + 'px'

    requestAnimationFrame(animate)
  }

  animate()
  
    
  areaTag.addEventListener("mousemove", function () {
   	mouseX = event.pageX
    mouseY = event.pageY
  })
  
  
  const handleResize = function () {
    
    w = areaTag.clientWidth
		h = areaTag.clientHeight
    
    logoX = w / 2
    logoY = h / 2

    mouseX = w / 2
    mouseY = h / 2
}

  areaTag.addEventListener("mouseleave", function () {
   	mouseX = w / 2
  	mouseY = h / 2
  })
  
 window.addEventListener('resize', handleResize)

})








// let faceSpeedTag = document.querySelector(`input[name="speed"]`)

// faceSpeedTag.addEventListener('input', function () {
//   faceSpeedTag.setAttribute = this.value
// })