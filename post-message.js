console.log('script loaded. v4');
var scope = "default";

if (location.host != "jedatu.github.io")
{
    scope = document.getElementById("message").nodeValue;
    setInterval(() => { console.log("TEST:", scope)}, 3000);
}
