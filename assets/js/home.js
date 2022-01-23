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
const phone = document.getElementById('phone')
console.log(phone)
phone.addEventListener('change', function () {
  console.log('yes')
  console.log(this.value)
})
