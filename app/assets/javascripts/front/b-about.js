Yadadya.resetItems = {
	proposalSlider: null,
	proposalSliderSlide: null,
	leadershipSlider: null,
	leadershipSliderSlide: null,
	aboutSlider: null,
	aboutSliderSlide: null,
}
Yadadya.DOMReady(function(){
	if (Yadadya.params.isMobile.matches) {
		$(".g-skills").on("click", function(){
			var $elem = $(this);
			if($elem.hasClass("g-skills_open")){
				$elem.removeClass("g-skills_open");	
				return;
			}
			$(".g-skills").removeClass("g-skills_open");
			setTimeout(function(){
				$elem.addClass("g-skills_open");
			}, 250);
			
		});
	}
	// НАЧАЛО ФОРМЫ

	$(".js-input-phone").inputmask("+7 (999) 999-99-99");
	function setErrorInput($input, state){
        $input.parents(".g-input").toggleClass("g-input_error", state);
    }
    function setSuccessInput($input, state){
        $input.parents(".g-input").toggleClass("g-input_success", state);
    }
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
	$(".js-input").on("focus", function(){
	    setErrorInput($(this), false);
	    setSuccessInput($(this), false);
	});

	$(document).on("submit", ".g-form", function(e){
            e.preventDefault();
            var $inputs = $(this).find(".js-input"),
                error = false;
            $inputs.each(function(){
                switch($(this).attr("name")) {
                    case "name":
                        if($(this).val() == ""){
                            error = true;
                            setErrorInput($(this), true);
                        } else
	                        setSuccessInput($(this), true);
                        break;
                    case "company":
                        if($(this).val() == ""){
                            error = true;
                            setErrorInput($(this), true);
                        } else
	                        setSuccessInput($(this), true);
                        break;
                    case "email":
                        if(!validateEmail($(this).val())){
                            error = true;
                            setErrorInput($(this), true);
                        } else
	                        setSuccessInput($(this), true);
                        break;
                    case "phone":
                        if(!$(this).inputmask("isComplete")){
                            error = true;
                            setErrorInput($(this), true);
                        } else
	                        setSuccessInput($(this), true);
                    default:
                        break;
                };
            });
            if(!error){
                $inputs.each(function(){
                    $(this).val("");
                });
                alert("asdasd");
                // if($(this).attr("action") == "subscribe")
                //     $("#subscribe-popup").fadeIn(300);
                // else if($(this).attr("action") == "call")
                //     $("#call-popup").fadeOut(200,function(){
                //         $("#call-success-popup").fadeIn(300);
                //     });
                // else if($(this).attr("action") == "contact"){
                //     $("#contact-popup").fadeIn(300);
                // }
            }
            return false;
        });
	// КОНЕЦ ФОРМЫ
});
Yadadya.reset = function(){
	if(Yadadya.resetItems.proposalSlider){
        Yadadya.resetItems.proposalSliderSlide = Yadadya.resetItems.proposalSlider.getCurrentSlide();
        Yadadya.resetItems.proposalSlider.destroySlider();
        Yadadya.resetItems.proposalSlider = null;
    }
    if(Yadadya.resetItems.leadershipSlider){
        Yadadya.resetItems.leadershipSliderSlide = Yadadya.resetItems.leadershipSlider.getCurrentSlide();
        Yadadya.resetItems.leadershipSlider.destroySlider();
        Yadadya.resetItems.leadershipSlider = null;
    }
    if(Yadadya.resetItems.aboutSlider){
        Yadadya.resetItems.aboutSliderSlide = Yadadya.resetItems.aboutSlider.getCurrentSlide();
        Yadadya.resetItems.aboutSlider.destroySlider();
        Yadadya.resetItems.aboutSlider = null;
    }
}
Yadadya.mobile = function(){
	Yadadya.resetItems.proposalSlider = $("#proposal-slider").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		mouseDrag: true,
		adaptiveHeight: true,
		startSlide: Yadadya.resetItems.proposalSliderSlide || 0
	});
	Yadadya.resetItems.leadershipSlider = $("#leadership-slider").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		mouseDrag: true,
		adaptiveHeight: true,
		startSlide: Yadadya.resetItems.proposalSliderSlide || 0
	});
	Yadadya.resetItems.aboutSlider = $("#about-write-slider").bxSlider({
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		mouseDrag: true,
		adaptiveHeight: true,
		slideWidth: parseInt(7.27 * Yadadya.rem, 10),
		slideMargin: parseInt(1.81 * Yadadya.rem, 10),
		startSlide: Yadadya.resetItems.aboutSliderSlide || 0
	});

}