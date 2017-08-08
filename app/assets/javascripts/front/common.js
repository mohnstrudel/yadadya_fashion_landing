var Yadadya = {
	params: {
		$menu: $("#menu-wrapper"),
		$header: $("#g-header"),
		$body: $(".g-body"),
		isTablet: window.matchMedia("(max-width: 1150px)"),
		isTabletSmall: window.matchMedia("(max-width: 1150px)"),
        isMobile: window.matchMedia("(max-width: 720px)"),
        isHeaderHide: window.matchMedia("(max-width: 900px)")
	},
	rem: parseFloat(getComputedStyle($("html")[0]).fontSize),
	resize: function(func){
		$(window).on("resize", func);
	},
	resetItems: {},
	supportFunc: {},
	reset: function(){		
	},
	mobile: function(){		
	},
	tablet: function(){
	},
	desctop: function(){
	},
	run: function(){
		Yadadya.rem = parseFloat(getComputedStyle($("html")[0]).fontSize);
		
		if(Yadadya.params.$header.hasClass("g-header_white")){
			if(Yadadya.params.isHeaderHide.matches){
				Yadadya.params.$header.find("#menu-wrapper").hide();
				Yadadya.params.$header.removeClass("g-header_open");
				setTimeout(function(){
					Yadadya.params.$header.find("#menu-wrapper").removeAttr("style");
				}, 300);
			} else{
				Yadadya.params.$header.addClass("g-header_open");
			}
		}

		if (Yadadya.params.isMobile.matches) {
			Yadadya.mobile();
	    } else if (Yadadya.params.isTablet.matches) {
	    	Yadadya.tablet();
	    } else {
	    	
	    	Yadadya.desctop();
	    }
	},
	DOMReady: function(func){
		$(document).ready(function(){
			Yadadya.run();
			$(".js-menu").on("click", function(){
				Yadadya.params.$body.removeClass("g-body_overflow");
				if(Yadadya.params.$menu.outerHeight() > $(window).height())
					Yadadya.params.$body.toggleClass("g-body_overflow");
				Yadadya.params.$menu.toggleClass("g-menu_visible");
			});
			func();
		});
	},
}
Yadadya.resize(function(){
	Yadadya.reset();
	Yadadya.run();

});