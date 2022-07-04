
//Registrarse
$('#sign-up').click(function() {
  $("#replay").css("display", "none");
  $("#play").css("display", "block");
  $("#qr").css("display", "none");
});


//Iniciar sesion
$('#log-in').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "block");
  $("#qr").css("display", "none");
  });

//Tutorial
$('#tutorial').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "none");
  $("#qr").css("display", "block");
});
//Volver a Inicio Session
$('#qr-back').click(function() {
  $("#play").css("display", "none");
  $("#replay").css("display", "block");
  $("#qr").css("display", "none");
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