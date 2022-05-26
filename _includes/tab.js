(function(){
    window.titleInterval = null;
    window.onblur = function() {
      var title = "  Todos tus chats 🦄 en una misma 🦄 plataforma 🦄";
      window.titleInterval = setInterval(function() {
        title = title.substring(1, title.length) + title.charAt(0);
        document.title = title;
        }, 100); }
      
    window.onfocus = function () {  
      clearInterval(window.titleInterval);
      document.title = document.querySelector("meta[property='og:title']").getAttribute("content"); 
    }
})();