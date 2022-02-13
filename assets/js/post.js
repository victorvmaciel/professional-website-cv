/*

Função converter form em JSON e Realizar um POST para o API GATEWAY 
O API GATEWAY vai chamar a função LAMBDA que vai enviar o e-mail ao usuário
Limite diário free tier: 200 e-mails


*/
function postToAWS(e) {
    e.preventDefault();
    //URL 
    var URL = "https://jbacgtjfkk.execute-api.us-east-1.amazonaws.com/prod";

    // abaixo setar os ids dos forms a serem enviados

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // abaixo o body armazena as 3 strings
    var body = {
       "name" : name,
       "email" : email,
       "message" : message
     };

     //abaixo: o post é o metodo que vai enviar
     // url da API GATEWAY da AWS

    $.ajax({
      type: "POST",
      url : "https://jbacgtjfkk.execute-api.us-east-1.amazonaws.com/prod",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(body),

      
      success: function () {
        // clear form and show a success message
        //alert("Successfull");
       // document.getElementById("thanks").reset();
        window.location.replace('#thanks')
    //location.reload();

      },

      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }
    });
  }
