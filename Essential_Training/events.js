const events = require("events");
const { emit } = require("process");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

/*emitter.emit("customEvent", "Hello World!", "Computer");
emitter.emit("customEvent", "That's cool", "Hugo");*/

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "GoodBye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
})