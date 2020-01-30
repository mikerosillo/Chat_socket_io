const io = require("socket.io")();
io.on("connection", socket => {
    socket.on('message', message => {
        console.log(message);
    })
    console.log("user connected")
})
io.listen(3001);