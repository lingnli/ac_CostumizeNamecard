const form = document.forms[0]
const namecard = document.querySelector('.namecard')
let nameInput = document.querySelector('#name')
let photoInput = document.querySelector('#photo')
let textareaInput = document.querySelector('#textarea')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

form.addEventListener('submit', function (event) {

  event.preventDefault()
  let namecardHTML = `
        <div class="img_box">`

  //製作img
  if (photoInput.value === '') {
    namecardHTML +=
      `<img src="https://upload.cc/i1/2019/06/07/rP10Ln.jpg" alt="">
       </div>
       <div class="info">`
  } else {
    namecardHTML +=
      `<img src="${photoInput.value}" alt="">
       </div>
       <div class="info">`
  }

  //製作名字name
  if (nameInput.value !== '') {
    namecardHTML +=
      `<div class="name">${nameInput.value}</div>`
  }
  //製作textarea
  if (textareaInput.value !== '') {
    namecardHTML +=
      `<p class="textarea">${textareaInput.value}</p>
      </div>`
  }

  //theme選擇樣式
  if (light.checked) {
    namecard.classList.add("light")
  } else if (dark.checked) {
    namecard.classList.add("dark")
  }

  namecard.innerHTML = namecardHTML

  nameInput.value = ""
  photoInput.value = ""
  textareaInput.value = ""
})

//增個reset功能
form.addEventListener('click', function (event) {

  if (event.target.classList.contains('reset')) {

    namecard.innerHTML = ''
    namecard.classList.remove("dark", "light")

  }
})

//限定textarea字數功能
form.addEventListener('input', function (event) {
  let count = textareaInput.value.length
  let feedback = textareaInput.nextElementSibling
  if (count > 0) {
    feedback.innerHTML = `還可輸入${100 - count}`
  }
})
//增加如果radio無選擇不可以送出