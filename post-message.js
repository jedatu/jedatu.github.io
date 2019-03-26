console.log('script loaded. v5');
var scope = "default";

if (location.host != "jedatu.github.io")
{
    scope = document.getElementById("message").value;
    setInterval(() => { console.log("TEST:", scope)}, 3000);
}
