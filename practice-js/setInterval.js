function createInterval(i) {
    let intervalId = setInterval(() => {
        if (i >= 5) {
            clearInterval(intervalId);
        } else {
            console.log("Akshay is Best");
            i += 1;
        }
    }, 1000);
}

createInterval(0);
