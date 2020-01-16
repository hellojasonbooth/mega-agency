

// // we pick the area in which the interaction will run
// const sectionTag = document.querySelector('section.logo-interaction')
// // we query all the logo elements
// let logoTags = sectionTag.querySelectorAll('section.logo-interaction div')

// // we need to set a position where the cursor will start
// // we want the interaction to start and finish in the middle
// let cursorX = sectionTag.offsetLeft + (sectionTag.clientWidth / 2)
// let cursorY = sectionTag.offsetTop + (sectionTag.clientHeight / 2)
// // we set the position of the logo in the center of the screen
// let logoX = sectionTag.offsetLeft + (sectionTag.clientWidth / 2)
// let logoY = sectionTag.offsetTop + (sectionTag.clientHeight / 2)

// // first we listen out for a mouse move
// sectionTag.addEventListener("mousemove", function (event) {
//   cursorX = event.clientX
//   cursorY = event.clientY
// })
// // once we leave the interaction area we need to center the logo
// // back in the center on the section
// sectionTag.addEventListener("mouseleave", function () {
//   cursorX = sectionTag.offsetLeft + (sectionTag.clientWidth / 2)
//   cursorY = sectionTag.offsetTop + (sectionTag.clientHeight / 2)
// })
  
// // if we resize the window we can recalculate the center position
// const handleResizeFooter = function () {
//   logoX = sectionTag.offsetLeft + (sectionTag.clientWidth / 2)
//   logoY = sectionTag.offsetTop + (sectionTag.clientHeight / 2)
//   cursorX = sectionTag.offsetLeft + (sectionTag.clientWidth / 2)
//   cursorY = sectionTag.offsetTop + (sectionTag.clientHeight / 2)
// }

//  window.addEventListener('resize', handleResizeFooter)
  
 
//  // here we grab the data speed from the html
//  // and animate it following the cursor

// logoTags.forEach(tag => {

//   function animate() {

//     let speed = parseFloat(tag.getAttribute("data-speed"))

//     let distX = cursorX - logoX 
//     let distY = cursorY - logoY 

//     logoX = logoX + (distX * speed)
//     logoY = logoY + (distY * speed)

//     tag.style.left = logoX  + "px"
//     tag.style.top = logoY + "px"

//     requestAnimationFrame(animate)
//   }

//   animate()
//   })





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

