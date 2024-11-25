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

