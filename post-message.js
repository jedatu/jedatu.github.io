console.log('script loaded. v8');
window.scope = "default";

if (location.host != "jedatu.github.io")
{
    window.addEventListener("message", parentReceiveMessage, false);

    function parentReceiveMessage(event)
    {
        if (typeof(event.data) == "string")
        {
            document.getElementById("log").innerHTML="IFrame Received: <br/>" + event.data + " from <br/>" + event.origin;
            console.log("PARENT RECEIEVED", event);
        }
    }

    setInterval(() => { 
        var new_scope = document.getElementById("message").value;
        if (scope != new_scope)
        {
            scope = new_scope;
            document.getElementsByTagName("iframe")[0].contentWindow.postMessage(scope, "*");
            //scope = document.getElementsByTagName("iframe")[0].contentWindow.contentDocument;
            console.log("PARENT:", scope)
        }
    }, 3000);
}
else {
    
    window.addEventListener("message", iframeReceiveMessage, false);

    function iframeReceiveMessage(event)
    {
        if (typeof(event.data) == "string")
        {
            document.getElementById("framed").innerHTML="IFrame Received: <br/>" + event.data + " from <br/>" + event.origin;
            console.log("FRAME", event);
        }
    }

    //setInterval(() => { 
    //    console.log("frame:", scope);
    //}, 9000);
}

//https://hackerone.com/reports/207042