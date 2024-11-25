import { emitter } from './event-emiter';

console.log('Hello World');

emitter.emit('messageLogged', { id: 1, url: 'http://' });