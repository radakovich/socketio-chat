(function(){
	var socket = io.connect('http://localhost');

	socket.on('event1', function(data){
		console.log(data.msg);
		socket.emit('event2', {msg: 'from client'});
	});
})();