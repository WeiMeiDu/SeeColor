var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
stage.addChild(gameView);

var n = 2;
function addRect(){
	//16777215为16进制的颜色ffffff转成10进制的数字    >>数字取整
	//转成16进制不足6位的以0来补充
	var c = Math.random()*16777215 ;
	var rc = c+30;
	if (rc>16777215){
		rc = c-30;
	}
	
	
//	alert(c);
//	alert(rc);
	var color = "#"+(c>>0).toString(16).slice(-6);
//	alert(color);
	var rectColor = "#"+(rc>>0).toString(16).slice(-6);
//	alert(rectColor);
	
	var x = parseInt(Math.random()*n);
	var y = parseInt(Math.random()*n);
	for(var indexX=0;indexX<n;indexX++){
		for (var indexY=0;indexY<n;indexY++){
			var r = new rect(n,color,rectColor);
			gameView.addChild(r);
			r.x = indexX;
			r.y = indexY;
			if(r.x==x && r.y==y){
				r.setRectType(2);
			}
			r.x = indexX*(400/n);
			r.y = indexY*(400/n);
			if (r.getRectType()==2){
				r.addEventListener("click",function(){
					if (n<7){
						++n;
					}
					gameView.removeAllChildren();
					addRect();
				})
			}
			
		}
	}
}
addRect();
