const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Add a default route to serve the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('A user connected.');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    const anonymousMessage = `Anonymous: ${message}`;
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(anonymousMessage); 
      }
    });
  });

  ws.on('close', () => {
    console.log('A user disconnected.');
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
