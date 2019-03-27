console.log('script loaded. v8');

window.scope = "default";

window.addEventListener("message", iframeReceiveMessage, false);

function iframeReceiveMessage(event) {
    if (typeof(event.data) == "string")
    {
        document.getElementById("framed").innerHTML="IFrame Received: <br/>" + event.data + " from <br/>" + event.origin;
        console.log("FRAME", event);
    }
}

function frameAction(message) {
    document.getElementById("framed").innerHTML="IFrame called with: <br/>" + message;
}

/*
setInterval(() => {
    console.log("frame:", scope);
}, 9000);
*/

//https://hackerone.com/reports/207042