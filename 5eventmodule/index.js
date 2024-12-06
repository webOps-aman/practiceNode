// let EmitEmitter = require('events');
// let emitter = new EmitEmitter();

// emitter.on('greet', () => {
//     console.log("hello event module");
// });

// emitter.emit('greet');
// _________________________



let EmitEmitter = require('events');
let emitter = new EmitEmitter();

emitter.on('greet', (username) => {
    console.log(`hello ${username}`);
});

emitter.emit('greet', 'kartik');