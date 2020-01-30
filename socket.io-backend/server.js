const io = require("socket.io")();
io.on("connection", function () {
    console.log("user connected")
})
io.listen(3001);