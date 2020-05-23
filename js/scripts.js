
$(document).ready(function () {
     $("#first").click( function(){
          $("#design").toggle(2000);
          $("#designs").toggle(2000);
     });

     $("#second").on("click",function(){
          $("#service").toggle(2000);
          $("#services").toggle(2000);
          
          });

     $("#third").on("click", function(){
          $("#product").toggle(2000);
          $("#managment").toggle(2000)
     });



});


//function calling my submit button

function grab_data(){
     const theName = document.getElementById('name').value
     const theEmail = document.getElementById("email").value
     const theMessage= document.getElementById("message").value;

//validation of data
     if (theName.length == 0) {
          alert("name required");
          theName.focus();

          if (theEmail.length == 0) {
               alert("your email required");
               theEmail.focus();
          }

          if (theMessage.length == 0) {
               alert("type a message");
               theMessage.focus();
          }
     } 
     
     else {   
     
return  alert("Thank you for contacting us " + theName + " we shall get intouch with you via the your email " + theEmail);
     }
}
