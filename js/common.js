$(document).ready(function() {
	if ($('.js-rate').length > 0) {
		$('.js-rate').each(function(){
			$(this).raty();
		});
		$('.js-rate.is-readonly').each(function(){
			$(this).raty({
				readOnly: true,
				noRatedMsg: ""
			});
		});
	}
	
});