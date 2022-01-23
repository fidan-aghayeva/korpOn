/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 21/01/2022 - 22:05:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 21/01/2022
 * - Author          : hp
 * - Modification    :
 **/
const faqCategories = [
  {
    id: 1,
    category: 'bütün',
    icon: ` <svg
        width='17'
        height='21'
        viewBox='0 0 17 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.85118 20.6925C1.55281 20.6925 1.26666 20.574 1.05568 20.363C0.844705 20.152 0.726179 19.8659 0.726179 19.5675L0.557429 3.075C0.543883 2.74014 0.596673 2.4059 0.712763 2.09151C0.828853 1.77713 1.00595 1.48879 1.23388 1.2431C1.4618 0.997398 1.73605 0.799186 2.04085 0.659859C2.34565 0.520532 2.67499 0.442839 3.00993 0.43125L13.7987 0.375C14.1341 0.380858 14.465 0.452729 14.7726 0.586509C15.0802 0.720288 15.3584 0.913355 15.5914 1.15468C15.8244 1.39601 16.0075 1.68087 16.1304 1.99299C16.2532 2.30511 16.3134 2.63837 16.3074 2.97375L16.4649 19.4662C16.4669 19.6634 16.417 19.8576 16.3202 20.0294C16.2235 20.2011 16.0833 20.3445 15.9137 20.445C15.7427 20.5437 15.5487 20.5957 15.3512 20.5957C15.1537 20.5957 14.9597 20.5437 14.7887 20.445L8.37618 16.89L2.42493 20.5238C2.2487 20.6222 2.05264 20.6799 1.85118 20.6925ZM8.33118 14.4488C8.52666 14.4491 8.71933 14.4953 8.89368 14.5837L14.1924 17.52L14.0574 2.95125C14.0574 2.72625 13.9112 2.56875 13.8212 2.58L3.02118 2.68125C2.93118 2.68125 2.80743 2.8275 2.80743 3.0525L2.94243 17.565L7.75743 14.6062C7.9323 14.5061 8.12969 14.4519 8.33118 14.4488Z'
          fill='#3F6B6A'
        />
      </svg>`
  },
  {
    id: 2,
    category: 'terminal',
    icon: `  <svg
        width='22'
        height='17'
        viewBox='0 0 22 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20.1628 0.1875H1.83715C0.82118 0.1875 0 0.985352 0 1.96875V15.0312C0 16.0146 0.82118 16.8125 1.83715 16.8125H20.1628C21.1788 16.8125 22 16.0146 22 15.0312V1.96875C22 0.985352 21.1788 0.1875 20.1628 0.1875ZM2.06632 1.96875H19.9337C20.0597 1.96875 20.1628 2.06895 20.1628 2.19141V3.75H1.83715V2.19141C1.83715 2.06895 1.94028 1.96875 2.06632 1.96875ZM19.9337 15.0312H2.06632C1.94028 15.0312 1.83715 14.9311 1.83715 14.8086V8.5H20.1628V14.8086C20.1628 14.9311 20.0597 15.0312 19.9337 15.0312ZM7.33333 11.3203V12.8047C7.33333 13.0496 7.12708 13.25 6.875 13.25H4.125C3.87292 13.25 3.66667 13.0496 3.66667 12.8047V11.3203C3.66667 11.0754 3.87292 10.875 4.125 10.875H6.875C7.12708 10.875 7.33333 11.0754 7.33333 11.3203ZM14.6667 11.3203V12.8047C14.6667 13.0496 14.4604 13.25 14.2083 13.25H9.01389C8.76181 13.25 8.55556 13.0496 8.55556 12.8047V11.3203C8.55556 11.0754 8.76181 10.875 9.01389 10.875H14.2083C14.4604 10.875 14.6667 11.0754 14.6667 11.3203Z'
          fill='#535353'
        />
      </svg>`
  },
  {
    id: 3,
    category: 'partnyorlar',
    icon: ` <svg
        width='18'
        height='22'
        viewBox='0 0 18 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.99999 13C3.99999 12.4477 4.44771 12 4.99999 12H9.99999C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 9.99999 14H4.99999C4.44771 14 3.99999 13.5523 3.99999 13Z'
          fill='#535353'
        />
        <path
          d='M4.99999 15C4.44771 15 3.99999 15.4477 3.99999 16C3.99999 16.5523 4.44771 17 4.99999 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H4.99999Z'
          fill='#535353'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M2 0C0.895431 0 0 0.895431 0 2V20C0 21.1046 0.895431 22 2 22H16C17.1046 22 18 21.1046 18 20V2C18 0.895431 17.1046 0 16 0H2ZM3.99999 2H2V20H16V2H10.5V9C10.5 9.39379 10.2689 9.75092 9.90965 9.91224C9.55041 10.0736 9.12995 10.009 8.83563 9.74741L7.24999 8.33796L5.66435 9.74741C5.37003 10.009 4.94957 10.0736 4.59033 9.91224C4.2311 9.75092 3.99999 9.39379 3.99999 9V2ZM8.49999 2H5.99999V6.77316L6.58563 6.25259C6.96451 5.9158 7.53547 5.9158 7.91435 6.25259L8.49999 6.77316V2Z'
          fill='#535353'
        />
      </svg>`
  },
  {
    id: 4,
    category: 'digər',
    icon: `  <svg
        width='23'
        height='23'
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12.5455 7.31818V10.4545H15.6818V12.5455H12.5455V15.6818H10.4545V12.5455H7.31818C6.74079 12.5455 6.27273 12.0774 6.27273 11.5C6.27273 10.9226 6.74079 10.4545 7.31818 10.4545H10.4545V7.31818H12.5455Z'
          fill='#535353'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M11.5 2.09091C6.3035 2.09091 2.09091 6.3035 2.09091 11.5C2.09091 16.6965 6.3035 20.9091 11.5 20.9091C16.6965 20.9091 20.9091 16.6965 20.9091 11.5C20.9091 6.3035 16.6965 2.09091 11.5 2.09091ZM0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5Z'
          fill='#535353'
        />
      </svg>`
  }
]

filterSelection('bütün')
function filterSelection (category) {
  const accordianItem = document.getElementsByClassName('accordion-item')

  if (category == 'bütün') category = ''

  for (let i = 0; i < accordianItem.length; i++) {
    removeClassName(accordianItem[i], 'show')
    if (accordianItem[i].className.indexOf(category) > -1) {
      addClassName(accordianItem[i], 'show')
    }
  }
}

// Show filtered elements

function addClassName (element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i]
    }
  }
}

// Hide elements that are not selected
function removeClassName (element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(' ')
}

const categoriesBox = document.querySelector('.faq_categories')

faqCategories.forEach(item => {
  const categoryItem = document.createElement('div')
  categoryItem.className = 'category_item'

  categoryItem.innerHTML = `
  <span class='category_icon'>
  ${item.icon}
  </span>
  <span class='category_name'>${item.category[0].toUpperCase() +
    item.category.slice(1)}</span>
`
  categoriesBox.appendChild(categoryItem)
})

const svgPaths = $('.category_item .category_icon svg path')

$('.category_item').click(function () {
  const listItems = $('.category_item')
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('active')
  }
  this.classList.add('active')
  filterSelection(this.innerText.toLowerCase())
  for (let i = 0; i < svgPaths.length; i++) {
    const parentElm = svgPaths[i].closest('.category_item')
    if (parentElm.classList.contains('active')) {
      svgPaths[i].setAttribute('fill', '#3F6B6A')
    } else {
      svgPaths[i].setAttribute('fill', '#535353')
    }
  }
})

const categoryItem = document.querySelector('.category_item')
categoryItem.classList.add('active')
