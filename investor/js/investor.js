$(function(){
	
				// 产品中心小屏幕js
				$(".xinpin_buttom_left .left_nav h3 a").click(function(){
					$(this).children("span").toggleClass("span");
					 $(".xinpin_buttom_left ul").animate({
					      height:'toggle'
					    });
					return false
				})
				// 数字滚动
				$(".counter").countUp({
					 delay: 10,//每个数字动画的延迟时间，单位毫秒。
					 time: 2000//计数动画总的持续时间。
				})
				// 发展
				$(".develop-buttom>ul>li").click(function() {
					$this = $(this)
					$this.addClass("number").siblings().removeClass("number")
					$(".develop-word ul li").eq($this.index()).addClass("tabclear").siblings().removeClass("tabclear")
					$(".develop_container-bg img").eq($this.index()).addClass("images").siblings().removeClass("images");
					return false
				})
			})