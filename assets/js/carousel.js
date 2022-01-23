/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 20/01/2022 - 20:48:29
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/01/2022
 * - Author          : hp
 * - Modification    :
 **/
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
})
