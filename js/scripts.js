
$(document).ready(function () {

     $("#design").click(function () {
          $("#paragraph1").show();
     })

     $("#service").click(function () {
          $("#paragraph2").show();
     })

     $("#product").click(function () {
          $("#paragraph3").show();
     })



});


//function calling my submit button

function grab_data(){
     const theName = document.getElementById('name').value
     const theEmail = document.getElementById("email").value

//validation of name

     function validateName(theName) {
          if (theName === '') {
               alert("name invalid");
          }
          else {
               theName === theName;
               return theName;
       
        }   
     }

//validation of email
     function validateEmail(theEmail) {
          if (theEmail === '') {
               alert("invalid email");
          }
          else {
               theEmail= theEmail;
               return theEmail;
          }

     }

     
return  alert("Thank you for contacting us " + theName + " we shall get intouch with you via the your email " + theEmail);
}
