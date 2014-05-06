(function(){
	var socket = io.connect('http://localhost');

	this.sendMessage = function(){
		socket.emit('message', {msg: $('.chat > input').val()});
		$('.chat > input').val('');	
	};

	socket.on('broadcastMessage', function(data){
		$('#message-window').append('<div class="message"><p>' + data.msg + '</p></div>');
	});
})();