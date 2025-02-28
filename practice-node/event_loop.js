/**
 * JS, a sync, blocking, single-threaded language 
 * To make async operation possible, we need help of libuv
 * 
 * Nodejs has basically 2 parts : 
 * 
 * 1. V8 Engine -> 1.a) call stack 1.b) Heap
 * 2. Libuv  -> 2.a) Thread Pool 2.b) Event Loop
 * 
 *3. Whenever there is an async operation like reading a file
 * it offloads it to libuv who either uses native mechanism of OS or make use of thread from its thread pool. Every async operation takes a callback and as soon as async operation is done it is queued to event queue
 * 
 * 4. Event Loop which is a C program
 *   A design pattern that co-ordinates the execution of sync
 *   and async code continously monitors if the call stack is empty and if there is a callback function in the event queue.
 * If yes it picks the callback function and push it to call stack for execution 
 * 
 * 
 * There are various types of event queues which event loop checks in a sequence
 * 
 * 1. Timer queue (setTimeout and setInterval cb)
 * 2. IO queue (I/O cb)
 * 3. check queue (setImmediate cb)
 * 4. close queue (close handler)
 * 5. microtask queue
 * 
 * Microtask queue is given highest priority. It is executed first and even when event loop goes from one queue to another 
 * it checks if there is any cbs in the microtask queue if yes then those cbs which is in the microtask queue will be executed followed by the cbs which is in the queue next in sequence 
 * 
 * 
 * Note : Callbacks in microtask queue will be executed in between execution of callbacks in event queue
 * 
 */