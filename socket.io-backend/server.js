const io = require("socket.io")();
io.on("connection", socket => {
    socket.on("message", message => {
        console.log(message);
        io.emit("message", message); // this is goin to send the message event to all the sockets that is on the server
    })
    console.log("user connected")
})
io.listen(3001);