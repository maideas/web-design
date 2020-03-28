
$(document).ready(() => {
  
  var full = false
  var el_h = $('#box').outerHeight()
  var el_w = $('#box').outerWidth()

  function scaleBox() {
    let win_h = $(window).outerHeight()
    let win_w = $(window).outerWidth()

    if (full) {
      $('#box').css({transform: "scaleX(" + 2 * win_w / el_w + ") scaleY(" + 2 * win_h / el_h + ")"})
    } else {
      $('#menu li').fadeOut(() => {
        $('#box').css({transform: "scale(1)"})
      })
    }
  }

  $('#box').on('transitioned webkitTransitionEnd', () => {
    if (full) {
      $('#menu li').fadeIn()
    }
  })

  $('#box-trigger').on('click', (e) => {
    e.preventDefault()
    full = !full  /* set toggled target state before scale ! */
    scaleBox()
  })

  $(window).on('resize', () => {
    scaleBox()
  })
})

