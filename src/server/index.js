const si = require('systeminformation');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const SerialPort = require('serialport');
const port = new SerialPort('COM3', { baudRate: 9600 });
const Readline = SerialPort.parsers.Readline;
const parser = port.pipe(new Readline());


server.listen(8081);
// app.use(express.static('dist'));

port.on('open', () => {
	console.log("c'est l'heure de manger !");
	setTimeout(() => {
		port.write('1', err => {
			if (err) {
			   console.log(err);
			}
		});
	}, 2000);
});

let nb_user = 0;
let currentUser = 0;	

io.on('connect', socket => {
	socket.on('php', () => {
		nb_user++;
		var currentRoom = 'room-'+nb_user % 2;
  		socket.join(currentRoom);
  		var currentUser = io.sockets.adapter.rooms[currentRoom].length;
		console.log(currentUser);
	});
    console.log(si.time(current));
    console.log(si.cpu(model));
});



parser.on('data', data => {
	// if(currentUser > 1){
		io.to('room-0').emit('data', data);
		io.to('room-1').emit('data', data);
	// }
})