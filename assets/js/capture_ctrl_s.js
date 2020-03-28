
$(document).ready(function() {

  $(window).bind('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          e.preventDefault()
          $('#cont').append('<div class="cont-item"><b>Ctrl+S</b></div>')
          break
      }
    }
  })
})

