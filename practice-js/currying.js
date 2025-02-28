function sendAutoEmail(from) {
    return function(to) {
        return function(subject) {
            console.log(`Email is sent from ${from} to ${to} with subject ${subject}`)
        }
    }
}



let sendTo = sendAutoEmail("Akshay");

let sendSubject = sendTo("Pratik");

let finalResult = sendSubject("You are great");