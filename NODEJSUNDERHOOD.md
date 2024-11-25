# Node.js Under the Hood

## 1. What is Node.js?

Node.js is a runtime environment for executing JavaScript code outside of a browser. It allows developers to build server-side applications and APIs using JavaScript. Built on Chrome's V8 JavaScript engine and libuv library, it's designed to build scalable network applications.

---


### The V8 Engine (A JavaScript Engine)

The V8 engine is the open-source JavaScript engine that runs Google Chrome and Node.js. It parses and compiles JavaScript code into machine code, which is then executed by the CPU. Written in C++.

- More about V8: https://v8.dev/

---

### EcmaScript

EcmaScript is the standard that JavaScript programming language is based on. It's maintained by Ecma International.

- More about EcmaScript: https://262.ecma-international.org/

---

### Libuv

Libuv is a multi-platform support library with a focus on asynchronous I/O. It's written in C. And handles the event loop, file system operations, child processes, networking, and more.

It is designed to handle non-blocking I/O operations. For example, when a file is read, the program doesn't wait for the file to be read, but instead continues to execute other operations. When the file is read, an event is triggered and the program continues from where it left off. Run task parallelly.

- More about Libuv: https://libuv.org/

---

### Event Loop

The event loop is the core of Node.js architecture. It's a loop that waits for events and processes them. It's designed to be non-blocking and asynchronous.

- Blocking code (Read line by line unless the loop is not over it can not execute the next line)
- Make Applications unresponsive (Blocking code can make the application unresponsive)

```
console.log('Hello');
for (let i = 0; i < 1000000000; i++) {
    // Blocking the event loop
}
console.log('World');
```

- Non-blocking the event loop
- Here the setTimeout is a non-blocking code. It will not block the event loop.
- Send setTimeout to the libuv library and it will be executed in the background.
- Event loop will take care of the rest. and once everything is done it will execute the callback function.
```
console.log('start');
setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {
        // Blocking the event loop
    }
    console.log('middle');
}, 0);
console.log('end');
```

- Output:
```
start
end
middle
```

--- 
- Use Cases:
    - Real-time applications (Chat applications, live notifications)
    - Data streaming applications (Video streaming, live sports updates)
    - Microservices (Building applications as a set of small services)
    - Microframeworks (Like Express.js)
