## Event Emiter

Event emiter is a class that allows you to create, fire, and listen for your own events.

- For example, you can create an event emitter and listen for a message logged event.

```
import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
```
