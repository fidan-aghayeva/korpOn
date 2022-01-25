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
const forms = document.querySelectorAll('.requires-validation')
Array.from(forms).forEach(function (form) {
  form.addEventListener(
    'submit',
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    },
    false
  )
})
