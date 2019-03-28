window.scope = "Parent";

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
        //document.getElementsByTagName("iframe")[0].contentWindow.postMessage(scope, "*");
        //scope = document.getElementsByTagName("iframe")[0].contentWindow.contentDocument;
        document.getElementsByTagName("iframe")[0].contentWindow.frameAction(scope);
        console.log("PARENT:", scope);
    }
}, 3000);