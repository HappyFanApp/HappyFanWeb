
//Registrarse
$('#sign-up').click(function() {
  $("#replay").css("display", "none");
  $("#play").css("display", "block");
  $("#qrDisplay").css("display", "none");
});


//Iniciar sesion
$('#log-in').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "block");
  $("#qrDisplay").css("display", "none");
  });

//Tutorial
$('#tutorial').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "none");
  $("#qrDisplay").css("display", "block");
});
//Volver a Inicio Session
$('#qr-back').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "block");
  $("#qrDisplay").css("display", "none");
  });

//Como iniciar session whtsapp
/*
(function(){
var placeholder = "   Pon aquí 👇👇👇 tú numero de 📲Whatsapp (+34) xxx xxx xxx ";
setInterval(function() {
      placeholder = placeholder.substring(1, placeholder.length) + placeholder.charAt(0);
      $(".tel").attr("placeholder", placeholder);
      }, 190); }

)();
*/

$('.tel').on("change keyup paste",
  function(){
    console.log($(this).val());
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    console.log($(this).val());
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.tel').click(
  function(){
    console.log("tel clicked");
    $('.tel-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

//Como recibir el pin
/*
(function(){
  var placeholder = " ¿Como obtener el código?  Abre en Whatsapp escríbe 👉 !entrar 👈  Pon aquí el código ";
  setInterval(function() {
        placeholder = placeholder.substring(1, placeholder.length) + placeholder.charAt(0);
        $(".password").attr("placeholder", placeholder);
        }, 190); }
  
  )();
*/
$('.password').on("change keyup paste",
  function(){
    console.log($(this).val());
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    console.log($(this).val());
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Password Clicked");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);


function qrGenerator(number, code){
  
  var srcIn = "https://chart.googleapis.com/chart?cht=qr&chl=";
  var srcOut = "&chs=280x280&chld=L|0";
  var linkWA = "https://api.whatsapp.com/send?";
  var phone = "phone=";
  var text ="%&text=";
  var send = srcIn + linkWA + phone + number + text + code + srcOut;
  var login = linkWA + phone + number + text + code ;
  var img = document.createElement("DIV");
  img.setAttribute("id", "imgqr");
  //img.src = send;

  $('#qrcode').html(img);
  var qrcode = new QRCode("imgqr");
  qrcode.makeCode(login);
  $('[id="qr"]').attr('href', login);


  //console.log(send);
  //setTimeout(function(){ $("#qrcode").remove("#imgqr"); qrGenerator("34627333121", "!entrar+!codigo=aguafiestas");}, 5000);
}



function handshake (){
  let language = navigator.language;
  var code = generatePasswordRand(6);
  localStorage.setItem("code", generatePasswordRand(6) );
  localStorage.setItem("language", language);
  console.log(localStorage.getItem("code"));
  console.log(language);
  
  $(document).ready(function(){
    $("#code").html(localStorage.getItem("code"));
    });
}

handshake();

qrGenerator("19035249895", "!entrar " + localStorage.getItem("code"));

function generatePasswordRand(length,type) {
  switch(type){
      case 'num':
          characters = "0123456789";
          break;
      case 'alf':
          characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
      case 'rand':
          //FOR ↓
          break;
      default:
          characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          break;
  }
  var pass = "";
  for (i=0; i < length; i++){
      if(type == 'rand'){
          pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
      }else{
          pass += characters.charAt(Math.floor(Math.random()*characters.length));   
      }
  }
  return pass;
}

const host = 'http://localhost:3001';

const ngrok = "http://fa0f-90-167-12-58.ngrok.io";

const socket = io(host , {
    session: (cb) => { cb({ token: localStorage.code })},
    transports: ['websocket'] 
});


socket.on("connect", () => {
    console.log("Conectado al servidor");
    socket.emit("register", {
    code : localStorage.code,
    language : localStorage.language
});
}).on("disconnect", () => {
    console.log("Desconectado del servidor");
}).on("token", data => {
    //console.log(data);
    localStorage.setItem("token", data.token );
    localStorage.setItem("tokenDashboard", data.dashboard );
    localStorage.setItem("profile", JSON.stringify(data.user) );
    console.log(data.user);
    $(document).ready(function(){
    $("#code").html("!conectado");
    $(".down").attr("class","down-success");
    });
    setTimeout(function myFunction() {
      location.replace("/chat")
    }, 2000);
}).on("error", err => {
    console.log(err);
});
