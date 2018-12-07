$("nav div").mouseenter(function()
					{
						$(this).children("ul").slideDown(300);
					}
			).mouseleave(function()
					{
						$(this).children("ul").slideUp(300);
					}
			);
			$("#phone").click(function()
			{
				prompt("电话:010-123456789\n请留下你的联系电话，方便我们与你联系");		
			}
		);
		$("#email").click(function()
			{
				prompt("邮箱：123456@163.com\n请留下你的邮箱，方便我们给您发送相关信息");		
			}
		);
	


	var photoes=["banner3.jpg","g1-11.jpg","g2-11.jpg","tooplate_image_05.jpg","g111.jpg"];
	
$("#left-style").click(function()
	{
		$(".top").attr("class","top1");
	}
);
$("#right-style").click(function()
	{
		$(".top1").attr("class","top");
	}
);


function timeAdd( num)
{
	num++;
	$("#chageD1").text(num);
	if(num<666)
	{
		var t=setTimeout(function(){timeAdd(num)},100);
	}
}
	
$("#chageD1").mouseover(function()
	{
				var num=0;
				var t=setTimeout(timeAdd(num),100);
				$(this).html(t);
	}
);
		
function timeAdd1( num)
{
	num++;
	$("#chageD2").text(num);
	if(num<666)
	{
		var t=setTimeout(function(){timeAdd1(num)},100);
	}
}
$("#chageD2").mouseover(function()
	{
				var num=0;
				var t=setTimeout(timeAdd1(num),100);
				$(this).html(t);
			}
);
			
function timeAdd2( num)
{
	num++;
	$("#chageD3").text(num);
	if(num<666)
	{
		var t=setTimeout(function(){timeAdd2(num)},100);
	}
}
$("#chageD3").mouseover(function()
	{
				var num=0;
				var t=setTimeout(timeAdd2(num),100);
				$(this).html(t);
			}
);