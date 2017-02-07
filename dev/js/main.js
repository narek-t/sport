$(document).ready(function() {
	$('.fullpage-helper').pagepiling({
		verticalCentered: false,
		anchors: ['first', 'second', 'third'],
		navigation: {
            'position': 'right',
            'tooltips': false,
        },
	});
	$('.toggle-menu').click(function(e) {
		e.preventDefault();
		$('.menu__inner').toggleClass('visible');
	})
});