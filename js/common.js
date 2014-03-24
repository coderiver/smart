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
            var select_list = $(this).find(".js-select-list");
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
            select_list.find("li").click(function() {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                return false;
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


    function accordion() {
        $(".js-accordion-list").hide();
        $(".js-accordion-title").click(function(){
            if ($(this).parent().hasClass("js-one-active")) {
                $(".js-accordion-title").removeClass("is-active");
                $(".js-accordion-list").slideUp("fast");
                $(this).toggleClass("is-active");
                $(this).parents(".js-accordion").find(".js-accordion-list").slideToggle("fast");
            }
            else {
                $(this).toggleClass("is-active");
                $(this).parents(".js-accordion").find(".js-accordion-list").slideToggle("fast");
            }
            
        });
        $(".js-show-all-accordion").on("click",function(){
            $(".js-accordion-list").slideDown("fast");
            return false;
        });
    }
    accordion();



    function ui_slider() {
        $(".js-ui-slider").each(function(){
            var slider = $(this).find(".js-ui-slider-main");
            var from = $(this).find(".js-ui-slider-from");
            var input_from = $(this).find(".js-ui-slider-from-input");
            var to = $(this).find(".js-ui-slider-to");
            var input_to = $(this).find(".js-ui-slider-to-input");
            slider.slider({
                range: true,
                min: 0,
                max: 5000,
                step: 100,
                values: [ 100, 4000 ],
                slide: function( event, ui ) {
                    from.text(ui.values[0]);
                    input_from.val(ui.values[0]);
                    to.text(ui.values[1]);
                    input_to.val(ui.values[1]);
                }
            });
            from.text(slider.slider( "values", 0 ));
            input_from.val(slider.slider( "values", 0 ));
            to.text(slider.slider( "values", 1 ));
            input_to.val(slider.slider( "values", 1 ));

            slider.find(".ui-slider-range").next().addClass("is-from");
            slider.find(".ui-slider-range").next().next().addClass("is-to");
        });
    }
    ui_slider();
	
    function choose() {
        var number = $(".js-choose");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus");
            var minus = $(this).find(".js-minus");
            plus.bind("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.bind("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
        });
    }
    choose();

    function simpleGallery() {
        // $(".js-gallery").each(function(){
        //     var url = $(this).find("a.is-active").attr("href");
        //     $(this).parents(".js-gallery-group").find(".js-gallery-preview img").attr("src", url);
        // });
        $(".js-gallery a").click(function(){
            $(".js-gallery a").removeClass("is-active");
            $(this).addClass("is-active");
            var url = $(this).attr("href");
            var url_replace =  $(this).parents(".js-gallery-group").find(".js-gallery-preview img").attr("src");
            $(this).find("img").attr("src", url_replace);
            $(this).attr("href", url_replace);
            $(this).parents(".js-gallery-group").find(".js-gallery-preview img").attr("src", url);
            return false;
        });
    }
    simpleGallery();

    $(".js-tooltip-text").hide();
    var tooltip = $(".js-tooltip");
    tooltip.hover(
        function(){
            $(this).show();
        },
        function() {
            $(this).hide()
        }
    );
    $(".js-with-tooltip").hover(
        function(){
            var left = $(this).offset().left;
            var bottom = $(window).height() - $(this).offset().top + 15
            var html = $(this).find(".js-tooltip-text").html();
            tooltip.children(".tooltip__wrap").html(html); 
            tooltip.css({
                left: left,
                bottom: bottom
            });
           
            //console.log(position);
            tooltip.fadeIn("fast");
        },
        function() {
            tooltip.hide()
        }
    );

    var popup = $(".js-popup");
    var overlay = $(".js-overlay");
    $(".js-close").click(function(){
        $(this).parents(".js-popup").hide();
        overlay.hide();
        return false;
    });
    overlay.click(function(){
        $(this).hide();
        popup.hide();
        return false;
    });
    

    function fixedCompare() {
        var top = $(".js-compare-box-target").offset().top - $(window).height();
        if ($(window).scrollTop() >= top) {
            $(".js-compare-box").addClass("is-static");
        }
        else {
            $(".js-compare-box").removeClass("is-static");
        }
    }
   if ($(".js-compare-box").length) {
         fixedCompare();
    }
    $(window).scroll(function(){
        if ($(".js-compare-box").length) {
             fixedCompare();
        }
    });

    $(".js-color-choser li").on("click", function(){
        $(".js-color-choser .color").removeClass("is-active");
        $(this).find(".color").addClass("is-active");
        return false;
    });

   $(".js-del-item").on("click", function(){
        $(this).parents(".js-item").remove();
   });
   

   if ($(".js-tel-input").length) {
        $(".js-tel-input").mask("(999) 999-99-99");
    }

    function zoomImg() {
        $(".js-zoom-img").each(function(){
            var slider = $(this).find(".js-zoom-img-main");
            var start_width = $(".js-gallery-preview img").attr("width");
            slider.slider({
                range: "min",
                max: 5,
                step: 1,
                value: 0,
                slide: function( event, ui ) {
                    $(".js-gallery-preview img").css({
                        width: +(+start_width*ui.value) + (+start_width)
                    });
                }
            });
            //ui_input.val(slider.slider( "values", 0 ));
            $(".js-gallery-preview img").css({
                width: +(+start_width*(slider.slider( "values", 0 ))) + (+start_width)
            });
        });
    }
    zoomImg();
    function rotateImg() {
        $(".js-rotate").each(function(){
            var slider = $(this).find(".js-rotate-main");
            var img = $(".js-rotate-img img");
            var img_url = $(".js-rotate-img img").attr("data-url");
            slider.slider({
                range: "min",
                max: 11,
                step: 1,
                value: 0,
                slide: function( event, ui ) {
                    img.attr("src", img_url+ui.value+".png")
                    //ui_input.val(ui.value);
                    // $(".js-gallery-preview img").css({
                    //     width: +(+start_width*ui.value) + (+start_width)
                    // });
                }
            });
            img.attr("src", img_url+slider.slider( "values", 0 )+".png")
        });
    }
    rotateImg();

    $(".js-cancel-filter").hide();
    $(".js-accordion .checkbox input").on("change", function(){
        if ($(this).parents(".js-accordion").find("input:checked").length > 0) {
            $(".js-cancel-filter").show();
        }
        else {
            $(".js-cancel-filter").hide();
        }
    });
    $(".js-cancel-filter").on("click", function(){
        $(this).parent().find(".checkbox input").removeAttr("checked");
        $(".js-cancel-filter").hide();
        return false;
    });

    $(".js-change-color a").on("click", function(){
        var img_url = $(this).attr("href");
        $(this).parents(".js-item").find(".js-item-img img").attr("src", img_url);
        $(this).parent().find("a").removeClass("is-active");
        $(this).addClass("is-active");
        return false;
    });

    $(".js-item-price").on("click", function(){
        var counter =  $(this).attr("data-count");
        counter++;
        $(this).addClass("is-active").attr("data-count", counter);
        $(this).find(".item__quant").text(counter);
       return false;
    });

    $(".js-add-to-compare input").on("change", function(){
        var id = $(this).attr("data-id");
        if ($(this).is(":checked")) {
            
            var counter = $(this).parents(".js-item").parent().find(".js-add-to-compare input:checked").length;
            console.log(counter);
            $(this).parent().find("span").text("Сравнивается c "+counter);

            $(".js-compare-row").find(".js-empty-item").first().remove();
            var html = $(".js-clone-item").html();
            $(".js-compare-row").prepend(html);
            $(".js-compare-row").find(".js-item-full").first().addClass(id);
        }
        else {
            $(this).parent().find("span").text("Добавить к сравнению");
            $("."+id).remove();
             var html = $(".js-clone-item-empty").html();
            $(".js-compare-row").prepend(html);
        }
        
    });

    $(".js-compare-row").on("click",".js-del-item", function(){
        $(this).parents(".js-item-full").remove();
        $(".js-compare-row").find(".js-empty-item").first();
        var html = $(".js-clone-item-empty").html();
        $(".js-compare-row").prepend(html);
        //$(".js-item").first().find(".js-add-to-compare input").removeAttr("checked");
    });

});