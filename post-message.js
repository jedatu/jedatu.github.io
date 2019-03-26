console.log('script loaded. v6');
window.scope = "default";

if (location.host != "jedatu.github.io")
{
    setInterval(() => { 
        scope = document.getElementById("message").value;
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage(scope, "jedatu.github.io");
        //scope = document.getElementsByTagName("iframe")[0].contentWindow.contentDocument;
        console.log("PARENT:", scope)
    }, 3000);
}
else {
    window.onmessage
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event)
    {
        console.log("FRAME", event);
    }

    //setInterval(() => { 
    //    console.log("frame:", scope);
    //}, 9000);
}

