$(function() {
  var cls = '#playpen'

	var originalBGplaypen = $(cls).css("background-color"),
		x, y, xy, bgWebKit, bgMoz,
		lightColor = "rgba(255,255,255,0.75)",
		gradientSize = 100;

		// Basic Demo
		$(cls).mousemove(function(e) {

			var self = this;

			$('.btn-wrap').each(function(i) {

				x = e.pageX - self.offsetLeft - this.offsetLeft;
				y = e.pageY - self.offsetTop - this.offsetTop;
				xy = x + " " + y;

				$('#debug' + i).text((x).toString()  + ' ' + (y).toString());


				bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
				bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

				$(this).css({ 'background': bgWebKit }).find('div.btn').text(xy);


			});


			$('#debug').text((e.pageX - this.offsetLeft).toString()  + ' ' + (e.pageY - this.offsetTop).toString());

		}).mouseleave(function() {
			$(this).css({ background: originalBGplaypen });
		});
});