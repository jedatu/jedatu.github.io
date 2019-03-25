console.log('script loaded. v3');
var scope = "default";

if (location.host != "jedatu.github.io")
{
    scope = document.getElementById("message").nodeValue;
}

setTimeout(() => { console.log("TEST:", scope)}, 3000);