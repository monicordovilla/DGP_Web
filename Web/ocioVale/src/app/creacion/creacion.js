$(document).ready(function(){
    $('#rol').on('change',function(){
        rol = $('#rol'.valueOf();
      if (  rol == "gestor" ) {
       $("#email").hide();
      } else {
       $("#email").show();
      }  
    })
  });