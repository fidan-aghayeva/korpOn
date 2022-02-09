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
const terminalFormEmail = document.querySelector('#terminalForm #email')
const terminalFormPhone = document.querySelector('#terminalForm #phone')
const submitBtn = document.querySelector('#terminalForm button')

async function terminalFormFunc () {
  submitBtn.classList.add('disable')
  const formData = {
    email: terminalFormEmail?.value,
    phone: terminalFormPhone?.value
  }

  const response = await fetch(
    'https://api.korpon.az/api/ContactForm/InsertRequestTerminal',
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

  submitBtn.classList.remove('disable')

  if (response.success) {
    document.querySelector('.terminal_form .form_body').style.display = 'none'
    document.querySelector('.terminal_form .success').style.display = 'flex'
  } else {
    alert('Uğursuz əməliyyat!')
  }
}

const forms = document.querySelectorAll('.requires-validation')
Array.from(forms).forEach(function (form) {
  form.addEventListener(
    'submit',
    function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!form.checkValidity()) {
      } else {
        terminalFormFunc()
      }

      form.classList.add('was-validated')
    },
    false
  )
})
