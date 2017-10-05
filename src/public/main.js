import io from 'socket.io-client';
const socket = io('localhost:8081');

socket.on('connect', () => {
	socket.emit('php');
});
socket.on('data', data => {
	document.body.style.background = `hsl(${data}, 50%, 50%)`;
});