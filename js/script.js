$(document).ready(function () {
  var shade = $('#shade');
  var panel = $('#panel');
  var panelCloseBtn = $('#panel-close');
  var projects = $('.project');
  var panelProjects = $('.panel-project');

  function hidePanel () {
    panelProjects.fadeOut('fast', function () {
      panel.hide(function () {
        shade.fadeOut('fast');
      });
    });
  }

  panelCloseBtn.click(hidePanel);
  shade.click(hidePanel);

  projects.click(function () {
    var ref = $(this).attr('data-ref');
    shade.fadeIn('fast', function () {
      panel.show('fast', function () {
        $('#project-' + ref).fadeIn('fast');
      });
    })
  });

})
