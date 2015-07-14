$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$("#ex4").slider({
	reversed : true
});

$("#ex1").on("slide", function(slideEvt) {
  var value = slideEvt.value;
  var width = value * 100 / 10 + '%';
  $('.statistics-status').css('width', width);
});

$("#ex4").on("slide", function(slideEvt) {
  var value = slideEvt.value;
  var width = value * 100 / 8 + '%';
  $('.statistics-status').css('height', width);
});