//window addIbentListener load function;
$(function(){
//	document query selecter logo
	//$('#logo').css({color:'yellow',fontSize:'30px'});
	//#logoで探すのはコストが高い
	//add EventListener
	//$('#logo').on('click',function(){$(this).css({color:'red'})});
		$('#logo').on('click',function(){
			$(this).animate({opacity:0,fontSize:'0px'},2000,function(){
				$(this).animate({opacity:1,fontSize:'140px'},2000,"easeOutBounce");
			});
		});
	});

