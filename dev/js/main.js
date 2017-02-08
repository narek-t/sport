$(document).ready(function() {
	$('.fullpage-helper').pagepiling({
		verticalCentered: true,
		anchors: ['first', 'second', 'third'],
		navigation: {
            'position': 'right',
            'tooltips': false,
        },
	});
	$('.toggle-menu').click(function(e) {
		e.preventDefault();
		$('.menu__inner').toggleClass('visible');
		$(this).toggleClass('active');
	})
});