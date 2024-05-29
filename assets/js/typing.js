
var hiddenText = document.getElemenyById('#hidden-txt').innerHTML;

var typed = new Typed('#typed-txt', {
  strings: [hiddenText],
  typeSpeed: 50,
});
