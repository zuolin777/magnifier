$.fn.extend({
	Magnifier:function(){
		//具体的实现
		$('#min').on('mousemove',function(e){				
			$('#slider').show();
			$('#max').show();
			//clientX是鼠标相对于浏览器边框的值
			//$('#min').offset().left 是min框距离浏览器的值
			//$('#slider').width()/2 是滑块的宽度的一半
			//使小滑块的中心点 跟随鼠标
			var x = e.clientX - $('#min').offset().left - $('#slider').width()/2;
			var y = e.clientY - $('#min').offset().top - $('#slider').height()/2;
			
			//滑块能滑动的最大距离
			var maxX = $('#min').width() - $('#slider').width();
			var maxY = $('#min').height() - $('#slider').height();
			//不让滑块出min框
			if(x < 0){
				x = 0;
			}else if(x > maxX){
				x = maxX;
			}
			if(y < 0){
				y = 0;
			}else if(y > maxY){
				y = maxY;
			}
		
			$('#slider').css({
				left:x,
				top:y
			})
			
			
			//比例
			var scaleX = $('#slider').position().left/$('#min').width();
			var scaleY = $('#slider').position().top/$('#min').height();
			
			//使用上面
			$('#max').scrollLeft(scaleX*$('#max img').width());
			$('#max').scrollTop(scaleY*$('#max img').height());
			
		})
		// 鼠标离开移除
		$('#min').on('mouseleave',function(){
			$('#slider').hide();
			$('#max').hide();
		})
		
			
	}
})
