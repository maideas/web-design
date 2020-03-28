
var SlideMenu = function(id, json_url) {

  var menu = $(id)

  var build_menu = function() {
    $.getJSON(json_url, function(json) {
      var html = ""
      for (var m = 0; m < json.menu.length; m++) {
        var item = json.menu[m].item
        for (var i = 0; i < item.length; i++) {
          html += '<div class="menu-item">'
          html += '<div class="menu-head">' + item[i].name + '</div>'
          var content = item[i].content
          for (var c = 0; c < content.length; c++) {
            html += '<div class="menu-content">'
            html += '<a href="' + content[c].href + '"'
            if (content[c].selected) {
              html += ' class="selected"'
            }
            html += '>'
            html += content[c].name + '</a></div>'
          }
          html += '</div>'
        }
      }
      menu.append(html)
    })
  }

  var menu_head_click_handler = function() {
    $(document).on('click', id + ' .menu-head', function() {
      
      /* remove expanded class from all menu heads */
      menu.find('.menu-head').removeClass('expanded')

      if ($(this).next().is(':visible')) {
        /* if the click related menu content is visible, slide all up */
        menu.find('.menu-content').slideUp()
      } else {
        /* if the click related menu content is not visible, slide all up
        and slide the click related menu content down */
        menu.find('.menu-content').slideUp()
        $(this).parent().find('.menu-content').slideDown()
        $(this).addClass('expanded')
      }
    })
  }

  var menu_content_click_handler = function() {
    $(document).on('click', id + ' .menu-content', function() {
      
      /* remove selected flag from all and set it on the clicked element */
      menu.find('.menu-content a').removeClass('selected')
      $(this).find('a').addClass('selected')
    })
  }

  var init_menu_state = function() {

    /* get the first "selected" link and the related menu-item */
    var link = menu.find('.menu-content a.selected').first()
    var item = link.parent().parent()

    /* clear "expanded"/"selected" class state */
    menu.find('.menu-head').removeClass('expanded')
    menu.find('.menu-content a.selected').removeClass('selected')

    /* set clean (single element) "selected" class state using (single) "link" from above */
    link.addClass('selected')
    item.find('.menu-head').addClass('expanded')

    /* open "expanded" menu-item */
    item.find('.menu-content').slideDown()
  }

  if (typeof json_url !== 'undefined') {
    build_menu()
  }
  menu_head_click_handler()
  menu_content_click_handler()
  init_menu_state()
}


// https://brettmhoffman.com/code/run-a-click-event-on-an-appended-element/

$(document).ready(function() {

  var slide_menu_1 = new SlideMenu("#menu1")
  var slide_menu_2 = new SlideMenu("#menu2", "slide_menu.json")
})

