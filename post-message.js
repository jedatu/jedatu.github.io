console.log('script loaded. v6');
var scope = "default";

if (location.host != "jedatu.github.io")
{
    setInterval(() => { 
        scope = document.getElementById("message").value;
        console.log("parent:", scope)
    }, 3000);
}
else {
    setInterval(() => { 
        console.log("frame:", scope);
    }, 3000);
}

