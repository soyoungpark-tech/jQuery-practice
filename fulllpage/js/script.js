$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu',
		autoScrolling:true,
        navigation: true,
		scrollHorizontally: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
