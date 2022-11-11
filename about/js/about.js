$(function(){
	// // 企业简介导航
	// $(".company-nav-right li a").click(function(){
	// 	$(this).addClass("cur").parent().siblings().children("a").removeClass("cur")
	// })
	// 数字滚动
	$(".counter").countUp({
		 delay: 10,//每个数字动画的延迟时间，单位毫秒。
		 time: 2000//计数动画总的持续时间。
	})
	// 企业文化和发展历程
	$('.culture_buttom li').each(function(e) {
		console.log(e)
	    var index = $(this).index();
	    $(this).click(function() {
	      $(this).addClass('cur').siblings().removeClass('cur')
	      culture_buttom_right.slideTo(index);
		  return false
	    })
	  })
	  var culture_buttom_right = new Swiper ('.culture_buttom_right',{
	   spaceBetween: 30,
	    nextButton: '.develop_prev',
	    prevButton: '.develop_next',
	  });
})
