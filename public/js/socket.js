(function(){
	var socket = io.connect('http://localhost');

	this.sendMessage = function(){
		socket.emit('message', {msg: 'why, hello, there.'});	
	};

	socket.on('broadcastMessage', function(data){
		console.log('broadcasting message');
		$('#message-window').append(data.msg);
	});
})();