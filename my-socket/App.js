import React, { useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('connect', () => {
      console.log('Connected');
      const account = prompt('Please enter your account:');
      socket.emit('user account', account);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    socket.on('chat message', (msg) => {
      console.log('Message:', msg);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const message = input.value;
    input.value = '';

    // Mengirim pesan ke server
    // Ganti 'chat message' dengan event yang sesuai di server
    // Misalnya 'send message'
    // socket.emit('send message', message);
  };

  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" onSubmit={handleSubmit}>
        <input id="input" name="message" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
