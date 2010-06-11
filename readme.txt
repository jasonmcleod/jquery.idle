Stupid simple example
$(document).ready(function() {
	
	$("#content").idle({
		after:2000,
		onidle:function() { 
			$("#content").fadeTo("slow",.1);							  
		},
		onactive:function() {
			$("#content").fadeTo("fast",1);						  						
		}
	});
});