//图片数组，如果包含超链接需改造成对象数组
var imgs=["timg(1).jpg","timg5(1).jpg","timg1(1).jpg","timg6(1).jpg","timg2.jpg"];
//当前图片编号
var index=0;
var sID;//定时器ID
var sFlag = false;//防止重复启动定时器的标记
//根据图片数组生成轮播控件
var s="";
for(var i in imgs)
{
	s+="<div></div>";
}
$("#dd_nav").html(s);
//设置首元素为当前元素，当前元素拥有class="cur"属性
$("#dd_nav div:first-child").addClass("cur");
		/* *
		* 图片切换函数
		* 修改图片编号，获取下一张图片名，修改<img>标签的src属性
		* */
function nextImg()
{
	index++;
	if(index==imgs.length) index=0;
		//切换图片
	$("#d_nav img").attr("src","img/"+imgs[index]);
		//切换轮播控件
	$("#dd_nav div").eq(index).addClass("cur").siblings().removeClass("cur");
}
		//启动轮播定时器，加入了防重复启动策略
function start() 
{
		if(!sFlag) 
		{
		sID = setInterval("nextImg()", 2000);
		sFlag = true;
		}
		}
		//停止定时器
	function stop() 
	{
		if(sFlag)
		{
		clearInterval(sID);
		sFlag = false;
		}
	}
start();//开始轮播
		//为轮播控件绑定click事件
$("#dd_nav div").click(function () 
{
		stop();
		index = $(this).index();
		//切换图片
		$("#d_nav img").attr("src","img/"+imgs[index]);
		//切换轮播控件
		$("#dd_nav div").eq(index).addClass("cur").siblings().removeClass("cur");
		//暂停一段时间后重启定时器
		setTimeout("start()",3000);
}
);
		//为图片绑定mouseenter事件和mouseleaver事件
$("#d_nav img").mouseenter(function ()
{
		stop();//鼠标进入时停止轮播
}).mouseleave(function () {
		start();//鼠标离开后重启轮播
				}
	);