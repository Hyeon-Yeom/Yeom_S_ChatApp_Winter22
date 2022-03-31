import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
// Changes start here
import path from 'path';

const basePath = process.cwd();
const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);

app.use(express.static(path.join(basePath, './dist')));

// Serve up the front end
app.get('/', (req, res) => {
    res.sendFile(index.html);
})

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

httpServer.listen(port, () => {
    console.log(`chat server up and running on ${port}`);
})

io.on('connection', (socket) => {
    console.log('a user connected');
    // this is custom event we emit on the serve side. Can be called anything.
    socket.emit("CONNECTED", socket.id);

    socket.emit("TEST_FOR_EVENT", { eyecolor: "blue" });

    // Listen for incoming messages
    socket.on('SEND_MESSAGE', function(data) {
        console.log('someone sent a message', data);

        io.emit('MESSAGE', data);
    })

    socket.on("TYPING", (data) => {
        console.log(`${data.username} is typing`);
    })
});