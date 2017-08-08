Yadadya.DOMReady(function(){
	$(".g-best-wrapper").mCustomScrollbar({
		 axis:"x"
	});
});
Yadadya.resetItems = {
	whatSlider: null,
    whatSliderSlide: null,
    whySlider: null,
    whySliderSlide: null
}
Yadadya.reset = function(){
	if(Yadadya.resetItems.whatSlider){
        Yadadya.resetItems.whatSliderSlide = Yadadya.resetItems.whatSlider.getCurrentSlide();
        Yadadya.resetItems.whatSlider.destroySlider();
        Yadadya.resetItems.whatSlider = null;
    }
    if(Yadadya.resetItems.whySlider){
        Yadadya.resetItems.whySliderSlide = Yadadya.resetItems.whySlider.getCurrentSlide();
        Yadadya.resetItems.whySlider.destroySlider();
        Yadadya.resetItems.whySlider = null;
    }
}
Yadadya.tablet = function(){
	$(".g-what-list__item, .g-why-list__item").css({height: "auto"});

	Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: parseInt(28.5 * Yadadya.rem, 10),
		slideMargin: parseInt(0.5 * Yadadya.rem, 10),
		mouseDrag: true,
		startSlide: Yadadya.resetItems.whatSliderSlide || 0
	});
	Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
		minSlides: 2,
		maxSlides: 2,
		moveSlides: 1,
		slideWidth: parseInt(57 * Yadadya.rem, 10),
		slideMargin: parseInt(0.5 * Yadadya.rem, 10),
		mouseDrag: true,
		startSlide: Yadadya.resetItems.whySliderSlide || 0
	});
	var maxHeight = 0;
	$("#what-slider").find(".g-what-list__item").each(function(){
		if(maxHeight < $(this).outerHeight())
			maxHeight = $(this).outerHeight();
	}).css({height: maxHeight});
	maxHeight = 0;
	$("#why-slider").find(".g-why-list__item").each(function(){
		if(maxHeight < $(this).outerHeight())
			maxHeight = $(this).outerHeight();
	}).css({height: maxHeight});	
}
Yadadya.mobile = function(){
	Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		mouseDrag: true,
		adaptiveHeight: true,
		startSlide: Yadadya.resetItems.whatSliderSlide || 0
	});
	Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		mouseDrag: true,
		adaptiveHeight: true,
		startSlide: Yadadya.resetItems.whySliderSlide || 0
	});

}