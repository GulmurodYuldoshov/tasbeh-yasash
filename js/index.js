let elBtn = document.querySelector('.knopka')
let desktop = document.querySelector('.ekran')
let clear = document.querySelector('.clear')
let elClose =document.querySelector('.close')

elBtn.addEventListener('click', function() {
    if (desktop.value !== '') {
        desktop.value =parseInt(desktop.value) +1
    }
})
clear.addEventListener('click', function() {
    if (desktop.value !== '') {
        desktop.value = 0
    }
})

elClose.addEventListener('click', function() {
  if (desktop.value !== '') {
    desktop.value = ''
  } else {
    desktop.value = 0
  }
})