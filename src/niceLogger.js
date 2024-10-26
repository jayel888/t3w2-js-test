function niceLogger() {
    console.log("Hello World!");
    return "Hello World."
}

function sampleTest() {
    return "Hey I'm a sample function."
}

function messageRepeater(messageToRepeat) {
    // message repeater functionality
    // stmts
    // return messageToRepeat.toString() + messageToRepeat.toString() + messageToRepeat.toString();
    // or
    if (Array.isArray(messageToRepeat)) {
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat]
    }
    else {
        let stringMessageToRepeat = messageToRepeat.toString();
        return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat;
    }
    
}

module.exports = {
    niceLogger,
    sampleTest,
    messageRepeater
}