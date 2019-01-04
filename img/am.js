		function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var isStop=true;
				for(var attr in json)
				{
					if(attr=='opacity')
					{
						var now=parseInt(getStyle(obj,attr)*100);
					}
					else
					{
						var now=parseInt(getStyle(obj,attr));
					}
				    var speed=(json[attr]-now)/5;
				    speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(attr=='opacity')
					{
						obj.style[attr]=(now+speed)/100;
					}
					else
					{
						obj.style[attr]=now+speed+'px';
					}
				    var current=now+speed;
				    if(json[attr]!=current)
				    {
				    	isStop=false;
				    }
				}
				if(isStop)
				{
					clearInterval(obj.timer);
					callback&&callback();
				}
			},10);
		}

		function animate1(obj,json,callback,index1){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var isStop=true;
				for(var attr in json)
				{
					
					var now=parseInt(getStyle(obj,attr));
				    var speed=-2;
				    speed=speed>0?Math.ceil(speed):Math.floor(speed);
					obj.style[attr]=now+speed+'px';
				    var current=now+speed;
				    if(current<-312)
				    {
				    	obj.style[attr] = '-312px';
				    	index1 = 156;
				    }
				    if(json[attr]!=current)
				    {
				    	isStop=false;
				    }
				}
				if(isStop)
				{
					clearInterval(obj.timer);
					callback&&callback();
				}
			},5);
		}

		function animate2(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var isStop=true;
				for(var attr in json)
				{
					var now=parseInt(getStyle(obj,attr));
				    var speed=10;
				    speed=speed>0?Math.ceil(speed):Math.floor(speed);
					obj.style[attr]=now+speed+'px';
				    var current=now+speed;
				    if(current>-20)
				    {
				    	obj.style[attr] = '-20px';
				    }
				    if(json[attr]!=current)
				    {
				    	isStop=false;
				    }
				}
				if(isStop)
				{
					clearInterval(obj.timer);
				}
			},100);
		}

		function animate3(obj,json){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var isStop=true;
				for(var attr in json)
				{
					var now=parseInt(getStyle(obj,attr));
				    var speed=-10;
				    speed=speed>0?Math.ceil(speed):Math.floor(speed);
					obj.style[attr]=now+speed+'px';
				    var current=now+speed;
				    if(current<-90)
				    {
				    	obj.style[attr] = '-90px';
				    }
				    if(json[attr]!=current)
				    {
				    	isStop=false;
				    }
				}
				if(isStop)
				{
					clearInterval(obj.timer);
				}
			},100);
		}

		function getStyle(obj,style){
			if(getComputedStyle(obj)){
				return getComputedStyle(obj)[style];
			}
			else
			{
				return obj.currentStyle[style]; 
			}
		}