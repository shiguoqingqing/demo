$(function() {
	// banner
	var banner = new Swiper('.banner', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.banner-prev',
		prevButton: '.banner-next',
		loop: true,
		autoplay: 3000,
		speed: 600,
	});
	// 数字滚动
	$(".counter").countUp({
		 delay: 10,//每个数字动画的延迟时间，单位毫秒。
		 time: 2000//计数动画总的持续时间。
	})
	// 时间品质
	$(".develop-buttom>ul>li").click(function() {
		var $this = $(this)
		$this.addClass("number").siblings().removeClass("number")
		$(".develop-word ul li").eq($this.index()).addClass("tabclear").siblings().removeClass("tabclear")
		$(".develop_container-bg img").eq($this.index()).addClass("images").siblings().removeClass("images");
		return false
	})
	// 品牌发展战略
	var strategy_buttom = new Swiper('.strategy-buttom', {
		pagination: '.swiper-pagination',
		slidesPerView: 1,
		paginationClickable: true,
		nextButton: '.strategy-prev',
		prevButton: '.strategy-next',
		loop: true,
		parallax: true,
		speed: 900,
	});
	// 龙大美食
	var strategy_buttom = new Swiper('.delicious-right', {
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
})
