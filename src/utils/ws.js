var ws = "";
import { getPlayerid } from "@/utils/cookie";
export async function startWS(url) {
  // const url = "ws://127.0.0.1:80";
  ws = new WebSocket(url);
  ws.onopen = (e) => {
    // 開始連線
    console.log("開始ws連線")
    // console.log(e.currentTarget.url);
  };
  ws.onerror = (err) => {
    console.log(err);
  };
  ws.onclose = () => {
    // 關閉連線
    console.log("close connection");
  };
}
export async function closeWS(code, reason = getPlayerid()) {
  ws.close(code, reason)
}
export async function getWSmsg(callback) {
  // 接收訊息
  ws.onmessage = (e) => {
    // console.log("接收到的訊息:");
    callback(JSON.parse(e.data));
  };
}

// export function errWS() {
//   ws.onerror = (err) => {
//     console.log(err);
//   };
// }

export async function sendWSmsg(e) {
  if(ws.readyState!=1){
    return;
  }
  let senddata = typeof (e) != 'string' ? JSON.stringify(e) : e 
  await ws.send(senddata);
}

// module.exports = { startWS, closeWS, getWSmsg, errWS, sendWSmsg };
