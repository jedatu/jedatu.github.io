console.log('script loaded. v7');
window.scope = "default";

if (location.host != "jedatu.github.io")
{
    setInterval(() => { 
        var new_scope = document.getElementById("message").value;
        if (scope != new_scope)
        {
            scope = new_scope;
            document.getElementsByTagName("iframe")[0].contentWindow.postMessage(scope, "https://jedatu.github.io");
            //scope = document.getElementsByTagName("iframe")[0].contentWindow.contentDocument;
            console.log("PARENT:", scope)
        }
    }, 3000);
}
else {
    window.onmessage
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event)
    {
        if (typeof(event.data) == "string")
        {
            document.getElementById("framed").innerHTML="IFrame Received: " + event.data + " from " + event.origin;
            console.log("FRAME", event);
        }
    }

    //setInterval(() => { 
    //    console.log("frame:", scope);
    //}, 9000);
}

