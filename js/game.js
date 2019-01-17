//预加载
window.onload=function(){
	var imgs = document.getElementsByTagName("img");
//	imgs[0].src="img/2.gif";
    var idx=document.getElementById("idx");
    console.log(idx);
    var num=0;
    var timeNum;
    var x;
    var yxMusic = document.getElementById("yxMusic");//点击音效
    var bgMusic = document.getElementById("bgMusic");//背景音效
    var overBox = document.getElementById("overBox");//游戏结束盒子
    bgMusic.play();//默认播放背景音乐
//  yxMusic.pause();//默认暂停点击音乐
//  function suiji(time){
//	timeNum = setInterval(function(){
		//获取一个0-8的随机数  出现老鼠
//		x=Math.round(Math.random()*8);
//		imgs[x].src="img/2.gif";
		
		//重新赋值一个0-8的随机数 清楚老鼠
//		x=Math.round(Math.random()*8);
//		imgs[x].src="img/5.jpg";
//   setTimeout(function(){
//		imgs[x].src="img/5.jpg";
//	   },time*2)
//   
//	  },1000)
//  }
    function jiasu(suDu){
    	clearInterval(time)
    	var time = setInterval(function(){
    		//获取一个0-8的随机数 出现老鼠
    		var x = Math.round(Math.random()*8);
    		imgs[x].src="img/2.gif";
    		//重新赋值一个0-8的随机数 清楚老鼠
    		x=Math.round(Math.random()*8);
    		imgs[x].src="img/5.jpg";
    	},suDu)
    }
    jiasu(1000);
    //点击overbox重新开始
    overBox.onclick=function(){
    	location.reload();//页面重载
    }
	
	
	for(var i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
			//把当前点击图片的路径获取
			var src =this.src;
			console.log(src);
			if(src.charAt(src.length-5)=="2"){
				this.src="img/5.jpg";
				num+=2;
				idx.innerHTML="得分："+num;
				if(num>=15){
					jiasu(100);
				}
//				if(num>10){
//					clearInterval(timeNum);
//					suiji(500)
//				}else if(num>20){
//					clearInterval(timeNum);
//					suiji(250)
//				}else if(num>30){
//					clearInterval(timeNum);
//					 suiji(125)
//				}
//				else if(num>40){
//					clearInterval(timeNum);
//					suiji(60)
//				}
//				else if(num>50){
//					clearInterval(timeNum);
//					suiji(30)
//				}else if(num>60){
//					clearInterval(timeNum);
//					suiji(15)
//				}
//              var defen = document.getElementById("deFen");
               yxMusic.play();//点击播放音效
               yxMusic.src="mp3/go.mp3";//重新赋值路径
                
			}else{
//				var defen = document.getElementById("deFen");
//              defen.src = "mp3/miss.mp3";
//				alert("GameOver!");
//				location.reload();//页面重载
				bgMusic.pause();//暂停背景音乐
				yxMusic.src="mp3/over.mp3";//把音效路径换成结束音效
				yxMusic.play()//音效播放
				overBox.style.display="block";//游戏结束盒子显示
			}
		}
	}
}


