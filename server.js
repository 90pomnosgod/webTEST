import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
console.log("💬 Servidor de chat activo en ws://localhost:8080");

wss.on("connection", ws => {
  ws.on("message", msg => {
    for (const client of wss.clients) {
      if (client.readyState === 1) client.send(msg);
    }
  });
});
