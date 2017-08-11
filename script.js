// accordion section start
var accordion2=document.querySelectorAll(".ninthP")

function opener(myElement){
		var count=0
		for( var i=0;i<accordion2.length;i++){
			accordion2[i].style.height="0px";
		}		
	var myInter=setInterval(function(){
		count+=1;
		myElement.nextElementSibling.style.height=0+count+"px";
		if(count>70){
			clearInterval(myInter)
		}
	},4)
}
// accordion section end

// main menu section start 
var mainmenu=document.querySelector(".mainmenu");
var scrollUp=document.querySelector(".scrollUp");
window.onscroll=function(){
	var scrollsize=document.body;
	if (scrollsize.scrollTop>70){
		mainmenu.style.display='block';
		scrollUp.style.display='block';
	}else{
		mainmenu.style.display='none';
		scrollUp.style.display='none';
	}
}
// main menu section end

//scrollUp section start 
scrollUp.onclick=function(){
	var goUp=setInterval(function() {
		var a=document.body;

		if(a.scrollTop>0){
			if(a.scrollTop<150){
				a.scrollTop-=1;
			}
			else{
				a.scrollTop-=15;
			}
		}else{
				clearInterval(goUp)
		}
	},0)
};
//scrollUp section end