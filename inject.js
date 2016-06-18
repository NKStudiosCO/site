(function() {
  $('article[data-source*=reading_list---------]').parent().parent().parent().remove();
  setInterval(function() {
    $('article[data-source*=reading_list---------]').parent().parent().parent().remove();
  }, 10);
})();
