import ws from "k6/ws";
import { accessToken, WEBSOCKET_SERVICE_API } from "../config.js";
import { sleep } from "k6";

export function initWsConnectionApi(duration){
  ws.connect(`${WEBSOCKET_SERVICE_API}/wss`, {}, function (socket) {
    socket.on("open", () => {
      console.log("WebSocket connection established");

      // STOMP CONNECT frame
      const connectFrame =
        "CONNECT\n" +
        `accept-version:1.1,1.0\n` +
        `heart-beat:10000,10000\n` +
        `Authorization:Bearer ${accessToken}\n\n\0`;
      socket.send(connectFrame);
      
      sleep(duration)
      socket.close();
    });

    socket.on("message", (msg) => {
      console.log("Received: ", msg);
    });

    socket.on("close", () => {
        console.log("WebSocket connection closed");
    });
  });
}