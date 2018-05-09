/*
* @Author: Administrator
* @Date:   2018-04-16 12:54:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-16 17:16:34
*/
$(function(){
	$('.button').hover(function(){
		var title=$('.button').attr('date');
		$('.tip em').text(title);
		var pos=$(this).position().left+10;
		var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$('.tip').css({'left':l+'px'}).animate({'opacity':1,'top':140},500);
	},function(){
		$('.tip').animate({'opacity':0,'top':100},500);
	})
})