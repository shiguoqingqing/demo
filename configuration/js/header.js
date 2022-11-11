// <!-- 头部nav导航js -->
	$(function() {
		/* 滚轮滚动到60以下 */
		$(document).scroll(function() {
			if ($(this).scrollTop() > 60) {
				$("#head").addClass("header")
			} else {
				$("#head").removeClass("header")
			}
		})
		// 大屏幕点击搜索图片
		$("#nav_min>div>a img.logo1").click(function() {
			$("#nav_min_left").css({
				"left": "0"
			})
			$("#nav_min_right").css({
				"right": "0"
			})
		})
		$("#nav_min_right>a img").click(function() {
			$("#nav_min_left").css({
				"left": "-50%"
			})
			$("#nav_min_right").css({
				"right": "-100%"
			})
		})
		// 小屏幕下main内容
		var width=$(document).width()
		if (width>900) {
			$("#nav_search_img").click(function() {
				$("#search_form").css({
					"opacity": "1",
					"right": " 0%",
					"transform": "translateX(0%)"
				})
			})
			$("#search_form>a img").click(function() {
				$("#search_form").css({
					"opacity": "0",
					"right": " -70%",
					"transform": "translateX(70%)"
				})
			})
		}
		
	})
