//公共弹窗
var myConfirm = function(title, cantxt, suretxt, type, resCallback) {
  var div = '<div class="cover"><div class="confirmbox"><div class="line1">' + title + '</div><div class="line2">';
  if(type == 1){
  	div += '<span class="cancle" id="cancle">' + cantxt + '</span><span class="sure" id="sure">' + suretxt + '</span>';
  }else if(type == 2) {
  	div += '<span class="cancle" id="cancle" style="color:#D2AA72">' + cantxt + '</span>';
  }
  div += '</div></div></div>';
  $('body').append(div)
  $('.cover').show();
	$('#cancle').click(function(){
		$('.cover').remove();
		resCallback({
			'status': false
		});
	});
	$('#sure').click(function(){
		$('.cover').remove();
		resCallback({
			'status': true
		});
	});
}
