$(document).ready(function() {

	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
    });

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

    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).parent().find(".js-select-list");
            var text = select_list.find("li").first().text();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
            });
        });
    }
    select();
     $('.js-select').click(function(event){
        event.stopPropagation();
    });

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