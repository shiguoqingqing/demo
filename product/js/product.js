$(function(){
	// 新品推荐
	var strategy_buttom = new Swiper('.strategy-buttom', {
		slidesPerView: 1,
		paginationClickable: true,
		nextButton: '.chanpin-prev',
		prevButton: '.chanpin-next',
		loop: true,
		parallax: true,
		speed: 900,
		// spaceBetween: 30,
	});
	// 产品中心
	$(".erji h3 a").click(function(){
		$(this).children("span").toggleClass("span");
		$(this).parent().siblings().toggleClass("none")
	})
	$(".block").children("h3").children("a").children("span").toggleClass("span");
	$(".block").children(".pro_erji_none").toggleClass("none")
	// 产品中心小屏幕js
	$(".xinpin_buttom_left .left_nav h3 a").click(function(){
		$(this).children("span").toggleClass("span");
		 $(".xinpin_buttom_left ul").animate({
		      height:'toggle'
		    });
		return false
	})
})