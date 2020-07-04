(function($) {
  Backdrop.behaviors.bbbCheckStatusInit = {
   attach: function (context, settings) {
    Backdrop.bbbCheckStatus();
    setInterval("Backdrop.bbbCheckStatus();", 5000);
    }
  }

  Backdrop.bbbCheckStatus = function () {
    var url = bbb_check_status_url;
    $.getJSON(url, function(data) {
      console.log(data);
      if (data.running == true) {
        location.href = location.href + '/meeting/attend';
      }
    });
  }
})(jQuery);
