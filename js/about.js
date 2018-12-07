


function Dj()
{
	var photoes=['g2-11(1).jpg','p3(1).jpg','p2(1).jpg','g5(1).jpg','banner5(1).jpg'];


var imgs1="";
var i=Math.round(Math.random()*4);
	imgs1+='<img id="qqh" src="img/'+photoes[i]+'" width="600" >';
document.getElementById("Ht").innerHTML=imgs1;
}
//setInterval("Dj()",2000);
$(".top_b div").click(function()
	{
		$("#qqh").show(Dj());
	}
);
