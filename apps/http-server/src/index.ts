import express, { json } from "express";
import { client } from "@repo/db/client"

const app = express();
app.use(json());

app.get('/', (req, res)=>{
    res.send("hi from http server")
});

app.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user =  await client.user.create({
        data:{
            username: username,
            password: password
        }}
    )

    res.json({
        "message" : "Signup successful",
        id:user.id
    })
});


app.listen(3002);
