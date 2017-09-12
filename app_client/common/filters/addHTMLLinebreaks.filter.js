(function () {
  
  angular
    .module('loc8rApp')
    .filter('addHTMLLineBreaks', addHTMLLineBreaks);

  function addHTMLLineBreaks () {
    return function (text) {
      var output = text.replace(/\n/g, '<br/>');
      return output;
    };
  }

})();