// JavaScript 

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		});//tag beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(200);
		});//tap vibrar
	},false);//deviceready
});