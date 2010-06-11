$.fn.idle = function(options) {
	var isidle = false;
	var hasMoved = false;
	var lastMove = (new Date).getTime();
	var defaults = {
		after:5000,
		interval:100
	}
	var opts = $.extend(defaults,options);		
	$(this).live("mousemove",function() {
		hasMoved = true;
		lastMove = (new Date).getTime();
		if(isidle) {
			setTimeout(opts.onactive,0);
			isidle = false;
		}
	});
	setInterval(function() {
		if((new Date).getTime() - lastMove > opts.after) {
			if(hasMoved) {
				setTimeout(opts.onidle,0);
			}
			lastMove = (new Date).getTime();
			isidle = true;
		}
	},opts.interval);	
};