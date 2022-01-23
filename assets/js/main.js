/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 22/01/2022 - 22:24:06
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/01/2022
 * - Author          : hp
 * - Modification    :
 **/
// mobile menu

const barIcon = document.querySelector('.bar_icon')
const menuBody = document.querySelector('.mobile_menu .menu_body')

barIcon.addEventListener('click', () => {
  menuBody.classList.toggle('show')
})
