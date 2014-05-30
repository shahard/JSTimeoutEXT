// Init a custom timeout object
 	var timeout = {
 		timeoutValue: timeoutValue, 
		timeoutObject: setTimeout(redirectToPlatform, timeoutValue),
		clear: function(){
			clearTimeout(this.timeoutObject);
			this.timeStart = -1;
		},
		restart: function(){
			this.clear();
			this.timeoutObject = setTimeout(redirectToPlatform, this.timeoutValue);
			this.timeStart = Date.now();
		},
		initWithInterval: function(time){
			this.timeoutValue = time;
			console.log(this.timeoutValue);
			this.clear();
			this.timeoutObject = setTimeout(redirectToPlatform, this.timeoutValue);
			this.timeStart = Date.now();			
		},
		timeStart: Date.now(),
		timePassed: function(){
			return (Date.now() - this.timeStart);
		},
		timeLeft: function() {
			var timeLeft = this.timeoutValue - this.timePassed();
			if ( (timeLeft) > 0) {
				return timeLeft;
			}
			return 0;
		}
 	};
