import ws, { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const wss = new WebSocketServer({port:3001});

wss.on ('connection', async (socket)=>{
    const user = await client.user.create({
        data:{
            //adding random data to check id db is getting connected
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("hi from the web socket")
})