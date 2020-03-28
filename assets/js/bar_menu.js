
$(document).ready(function() {

  $('.menu-content').on('click', function() {
    // clear :checked property when menu item content
    // area gets clicked ...
    $(this).parent().find('input').prop('checked', false);
  });

  $('.menu-item span').on('click', function() {
    var cb = $(this).parent().find('input');
    // get menu item span :checked status first ...
    var cb_is_checked = cb.is(':checked');
    
    // clear all :checked properties ...
    $(this).parent().parent().find('input').prop('checked', false);

    // if it was not already :checked, set it to :checked ...
    if (!cb_is_checked) {
      cb.prop('checked', true);
    }
  });
});

