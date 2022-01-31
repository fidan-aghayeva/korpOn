/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 22/01/2022 - 12:47:29
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/01/2022
 * - Author          : hp
 * - Modification    :
 **/
const fullName = document.querySelector('#contactForm #fullName')
const applicationReason = document.querySelector(
  '#contactForm #applicationReason'
)
const email = document.querySelector('#contactForm #email')
const phone = document.querySelector('#contactForm #phone')
const note = document.querySelector('#contactForm #note')
const submitBtn = document.querySelector('#contactForm button')

async function contactFormFunc () {
  submitBtn.classList.add('disable')
  const formData = {
    fullName: fullName?.value,
    applicationReason:
      applicationReason?.options[applicationReason.selectedIndex].text,
    email: email?.value,
    phone: phone?.value,
    note: note?.value
  }

  console.log(formData)

  const response = await fetch(
    'http://157.90.55.174/api/ContactForm/InsertContactForm',
    {
      method: 'post',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    }
  )
    .then(res => res.json())
    .then(data => data)

  if (!response.success) {
    alert('Uğursuz əməliyyat!')
  }
  submitBtn.classList.remove('disable')
}

const contactForms = document.querySelectorAll('.requires-validation')
Array.from(contactForms).forEach(function (form) {
  form.addEventListener(
    'submit',
    function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!form.checkValidity()) {
      } else {
        contactFormFunc()
      }

      form.classList.add('was-validated')
    },
    false
  )
})
