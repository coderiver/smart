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

	function tab() {
        $(".js-tab").each(function(){

            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();

            tab_link.bind("click", function() {
            	if ($(this).hasClass("is-active")) {
            		return false;
            	}
            	else {
            		var index = $(this).attr("href");
	                tab_link.removeClass("is-active");
	                tab_link.parent().removeClass("is-active");
	                $(this).addClass("is-active");
	                $(this).parent().addClass("is-active");
	                tab_cont.hide();
	                $(this).parents(".js-tab-group").find("."+index).toggle();
            	}
               	return false;
            });
        });
    }
    tab();

    $('.js-cycle').each(function(){
        var cycle_prev = $(this).parent().find(".js-prev");
        var cycle_next = $(this).parent().find(".js-next");
        var pager = $(this).parent().find(".js-pager");
        $(this).cycle({
            speed: 200,
            fx: "carousel",
            prev: cycle_prev,
            next: cycle_next,
            pager: pager,
        });
    });
	
});