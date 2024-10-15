const net = require("net");
const readline = require("readline");

const clients = [];
const choices = {
  chelsea: "chelsea",
  arsenal: "arsenal",
};

const poll = {
  chelsea: 0,
  arsenal: 0,
};

const updateAndSendPoll = (choice) => {
  if (choice === choices.chelsea) poll.chelsea = poll.chelsea + 1;
  if (choice === choices.arsenal) poll.arsenal = poll.arsenal + 1;

  clients.forEach((client) => {
    client.write(JSON.stringify(poll));
  });
};

const server = net.createServer((socket) => {
  const clientId = `${socket.remoteAddress}:${socket.remotePort}`;

  console.log("new connection from ", clientId);

  clients.push(socket);

  socket.on("data", (data) => {
    const ans = data.toString();
    if (ans === "chelsea" || ans === "arsenal") {
      updateAndSendPoll(ans)
    } else if (ans == "exit") {
      console.log("client exiting");
      socket.end();
    }
  });

  socket.on("end", () => {
    const index = clients.findIndex((client) => client.remotePort === socket.remotePort)
    clients.splice(index, 1)
    console.log(`client ${clientId} disconnected`);
  });
});

server.listen(8080, () => {
  console.log("server listening at port 8080");
});
