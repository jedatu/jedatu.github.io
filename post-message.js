console.log('script loaded.');

if (location.host != "jedatu.github.io")
{
    scope = document.getElementById("message").nodeValue;
}

setTimeout(() => { console.log("TEST:", scope)}, 3000);