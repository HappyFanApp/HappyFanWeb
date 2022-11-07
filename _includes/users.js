"use strict";
// document  get div class chat-list-header 
var title = document.getElementsByClassName("chat-list-header");

let totalHeight = 0;

for (let i = 0; i < title.length; i++) {
let totalHeight = 0;
title[i].addEventListener("click", function () {
    let result = this.nextElementSibling;
    let activeSibling = this.nextElementSibling.classList.contains("active");
    this.classList.toggle("active");
    result.classList.toggle("active");

    if (!activeSibling) {
    for (i = 0; i < result.children.length; i++) {
        totalHeight = totalHeight + result.children[i].scrollHeight + 40;
    }
    } else {
    totalHeight = 0;
    }

    result.style.maxHeight = totalHeight + "px";
});
}
/*
const themeColors = document.querySelectorAll(".theme-color");
themeColors.forEach(themeColor => {
themeColor.addEventListener("click", e => {
    themeColors.forEach(c => c.classList.remove("active"));
    const theme = themeColor.getAttribute("data-color");
    document.body.setAttribute("data-theme", theme);
    themeColor.classList.add("active");
});
});
*/
// Enviar mensajes al servidor y la web
const  sendButton = document.getElementById("send");

var inputMessage = document.getElementById("input-message");

sendButton.addEventListener("click", function () {
    //console.log(inputMessage.innerText);
    if(inputMessage.innerText != ""){
        displayMsg(inputMessage.innerText);
        //socket.emit("sendMessage", inputMessage.innerText);
    }
    inputMessage.innerText = "";
});

inputMessage.addEventListener("keyup", function (e) {
    //console.log(e);
    if(e.key  == 'Enter'){
        //console.log(inputMessage.innerText);
        if(inputMessage.innerText != ""){
            displayMsg(inputMessage.innerText);
            //socket.emit("sendMessage", inputMessage.innerText);
        }
        inputMessage.innerText = "";
    }
});



function updateScrollbar() {
    const chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
}


function displayMsg(data) {
    var chat = document.getElementById("chat");
    var msg = document.createElement("div");
    var text = `<div class="message-wrapper reverse">
    <img class="message-pp" src="https://happyfan.es/assets/img/happyFan_Unicornio_Insta_Sonrisa.png" alt="profile-pic">
    <div class="message-box-wrapper">
    <div class="message-box">
        ${data}
    </div>
    <span>9h ago</span>
    </div>
    </div>`  ;
    msg.innerHTML = text;
    chat.appendChild(msg); 
    updateScrollbar();
};