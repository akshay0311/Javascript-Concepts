function debounce(func, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function logMessage(message) {
    console.log(message);
}

const debouncedLog = debounce(logMessage, 1000);

// Rapidly calling the debounced function
debouncedLog("Hello");
debouncedLog("World"); 
debouncedLog("Debouncing!");



function throttle(fn, delay) {
    let lastTime = 0;

    return function(...args) {
        const now = new Date().getTime();
        
        if (now - lastTime < delay) return;

        lastTime = now;

        fn.apply(this, args);
    }
}