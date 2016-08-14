function rect(n,color,rectColor){
	createjs.Shape.call(this);
	this.setRectType = function(type){
		this._rectType = type;
		switch(type){
			case 1:
				this.setColor(color);
				break;
			case 2:
				this.setColor(rectColor);
				break;
			
		}
	}
	this.setColor = function (colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawRect(0,0,400/n-5,400/n-5);
		this.graphics.endFill();
	}
	this.getRectType = function(){
		return this._rectType;
	}
	this.setRectType(1);
}
rect.prototype = new createjs.Shape();
