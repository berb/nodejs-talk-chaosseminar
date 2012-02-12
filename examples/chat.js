net = require('net');

var clients = [];

var server = net.createServer();

server.on('connection', function (conn) {
  console.log('new connection!');

  clients.push(conn);
  conn.write("Hello new client\n");

  conn.on('data', function (data) {
    broadcast(conn, data);
  });

  conn.on('end', function() {
    clients.splice(clients.indexOf(conn, 1));
  })
});

function broadcast(sender, data) {
  clients.forEach(function (client) {
    if (client !== sender)
    	client.write(data);
  });
}

server.listen(1337);