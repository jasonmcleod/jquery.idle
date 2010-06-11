Stupid simple example
$(document).ready(function() {
	
	$("#content").idle(
		function() { 
			$("#content").fadeTo("slow",.1);							  
		},
		function() {
			$("#content").fadeTo("fast",1);						  						
		}
	);
});