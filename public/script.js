$(document).ready(function(){
  var url = document.location.href;

  new Clipboard('.copy-url', {
    text: function() {
      return url;
    }
  }).on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      $('.copy-url').text('Copied!')

      e.clearSelection();
  });
});
