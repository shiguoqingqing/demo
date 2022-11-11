$(function(){
	// 食品业务list
	var strategy_buttom = new Swiper('.delicious-right',{
		    nextButton: '.delicious-next',
		    prevButton: '.delicious-prev',
		    slidesPerView: 4,
		    spaceBetween: 30,
		    loop: true,
		    breakpoints: {
		 1400: {
		   slidesPerView: 3,
		 },
		 1000: {
		   slidesPerView: 2,
		 },
		 900: {
		   slidesPerView: 3,
		 },
		 700: {
		   slidesPerView: 2,
		   spaceBetween: 20,
		 },
		   }
	});
	// 数字滚动
	$(".counter").countUp({
		 delay: 10,//每个数字动画的延迟时间，单位毫秒。
		 time: 2000//计数动画总的持续时间。
	})
	// 产品优势
	var youshi_swiper_container=new Swiper(".youshi_swiper_container",{
		
	})
	$('.youshi_nav_content ul  li').each(function(e) {
		console.log(e)
	    var index = $(this).index();
	    $(this).click(function() {
	      $(this).addClass('cur').siblings().removeClass('cur')
		  $(this).children("h3").addClass("h3").parent().siblings().children("h3").removeClass("h3")
		  $(this).children().addClass("img").siblings().removeClass("img")
	      youshi_swiper_container.slideTo(index);
		  return false
	    })
	  })
})
