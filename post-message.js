console.log('script loaded. v6');
window.scope = "default";

if (location.host != "jedatu.github.io")
{
    setInterval(() => { 
        //scope = document.getElementById("message").value;
        scope = document.getElementsByTagName("iframe")[0].contentWindow.contentDocument;
        console.log("parent:", scope)
    }, 3000);
}
else {
    setInterval(() => { 
        console.log("frame:", scope);
    }, 9000);
}

