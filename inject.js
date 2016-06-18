(function() {
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  $('article[data-source*=reading_list---------]')
    .parent()
    .parent()
    .parent()
    .remove();
  var observer = new MutationObserver(function(mutations, observer) {
    $('article[data-source*=reading_list---------]')
      .parent()
      .parent()
      .parent()
      .remove();
  });
  observer.observe(document, {
    subtree: true,
    attributes: true,
  });
})();
