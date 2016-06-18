// listen for our browerAction to be clicked
chrome.webNavigation.onCompleted.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, { file: 'jquery.js' }, function() {
    chrome.tabs.executeScript(tab.ib, { file: 'inject.js' });
  });
});
