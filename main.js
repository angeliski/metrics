//http://seiyria.com/bootstrap-slider/

$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$("#ex4").slider({
	reversed : true
});

$(document).on("slide", "#ex1", function(slideEvt) {
  var value = slideEvt.value;
  var width = value * 100 / 10 + '%';
  $('.statistics-status').css('width', width);
});

$(document).on("slide", "#ex4", function(slideEvt) {
  var value = slideEvt.value;
  var width = value * 100 / 8 + '%';
  $('.statistics-status').css('height', width);
});