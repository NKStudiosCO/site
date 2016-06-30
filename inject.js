(function() {
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var observer = new MutationObserver(function(mutations, observer) {
    $('.postMetaInline').each(function(i, e) {
      var isRec = $(e).html().indexOf('Recommended') !== -1;
      if (isRec) {
        $(e).parent().parent().parent().parent().hide();
      }
    });
  });
  observer.observe(document, {
    subtree: true,
    attributes: true,
  });
})();
