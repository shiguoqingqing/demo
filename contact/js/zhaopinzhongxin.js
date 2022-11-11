// 招聘索引
$(document).ready(function() {
	var ww = $(document).width();
	if (ww > 900) {
		$(".recruit_suoyin_container ul li").hover(function() {
			$(this).siblings("li").addClass('jz_small');
			$(this).addClass("jz_big").removeClass("jz_small").siblings().removeClass("jz_big");
		},function() {
				$(".recruit_suoyin_container ul li").removeClass("jz_big jz_small");
			}
		);
	}
});
