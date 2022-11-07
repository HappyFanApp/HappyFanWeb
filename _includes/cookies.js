(function() {
//    localStorage.clear(); // Activar para produccion
   
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
        if (decodedCookie != "" || decodedCookie != null){
            return decodedCookie.substring(cname.length + 1);
        }else{
            return "";
        }

    }
    
    function checkCookie() {
    let user = getCookie("no_cookie");
        if (user != "") {
            console.log("Welcome again " + user);
        } else {
            if (user != "" || user != null) {
                setCookie("no_cookie", false, 30);
            }
        }
    }
    
    checkCookie();

    window.addEventListener("load", () => {
        if(getCookie("no_cookie") === "true"){
            return;
        }
        const cookieContainer = document.createElement("div");
        cookieContainer.classList.add("hidden");
        const cookieParagraph = document.createElement("p");
        const cookieContent = document.createTextNode("{{ site.data.metaData.cookies.message }}");
        const cookieAgreeButton = document.createElement("button");
        const cookieButtonContent = document.createTextNode("{{ site.data.metaData.cookies.agreeButtonText }}");
        cookieAgreeButton.appendChild(cookieButtonContent);
        cookieAgreeButton.onclick = () => {
            setCookie("no_cookie", true, 30);
            cookieContainer.classList.add("hidden");
            window.setTimeout(cookieContainer.remove.bind(cookieContainer), 1000);
        }
        cookieParagraph.append(cookieContent);
        cookieContainer.append(cookieParagraph, cookieAgreeButton);
        cookieContainer.classList.add("cookie-container")
        document.body.appendChild(cookieContainer);
        window.setTimeout(() => cookieContainer.classList.remove("hidden"));
    });
})();