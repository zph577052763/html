
			var xbs=
			[
				{
					img1:"up-arrow.png",
					txt1:"Know More"
				},
				{
					img1:"wdt_icon_02.png",
					txt1:"Learn more"
				},
				{
					img1:"xb1.png",
					txt1:"Continuous Learning"
				},
				{
					img1:"xb5.png",
					txt1:"Learn Teachnology"
				},
				{
					img1:"xb3.png",
					txt1:"Multifaceted Learning"
				},
				
				{
					img1:"xb6.png",
					txt1:"Practice"
				},
				{
					img1:"xb7.png",
					txt1:"See More"
				},
				{
					img1:"xb8.png",
					txt1:"More Exchages"
				},
				{
					img1:"xb9.png",
					txt1:"More~~~"
				}
			];
			var tt="";
				for(var i=0;i<=2;i++)
				{
					tt+='<li><img src="img/'+xbs[i].img1+'">'+xbs[i].txt1+'</li>';
				}
				document.getElementById("ft").innerHTML=tt;
			var tt1="";	
				for(var i=3;i<=5;i++)
				{
					tt1+='<li><img src="img/'+xbs[i].img1+'">'+xbs[i].txt1+'</li>';
				}
				document.getElementById("ft1").innerHTML=tt1;
				
				var tt2="";	
				for(var i=6;i<=8;i++)
				{
					tt2+='<li><img src="img/'+xbs[i].img1+'">'+xbs[i].txt1+'</li>';
				}
				document.getElementById("ft2").innerHTML=tt2;