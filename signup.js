
      function visibility() {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

    document.getElementById("button").onclick = function () {

            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var phonenumber = document.getElementById("phonenumber").value;

            if(username== "")
            {
               alert("Your Username is not Valid");
               document.getElementById("username").style.border= "1px solid red";
             }

             var a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             if(!a.test(email))
               {
                 alert("Your Email is not Valid");
                 document.getElementById("email").style.border= "1px solid red";
               }

              var b=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
              if (!b.test(password))
              {
                alert("Your Password is not Valid")
                document.getElementById("password").style.border= "1px solid red";
              }

               var c = /^\d{10}$/;
               if (!c.test(phonenumber))
               {
                alert("Your Phone Number is not Valid")
                document.getElementById("phonenumber").style.border= "1px solid red";
               }

               if(username!= "" && a.test(email) && b.test(password) && c.test(phonenumber) ){

                // alert("Sign Up Done Successfully");
                // document.getElementById("username").style.border= "1px solid green";
                // document.getElementById("email").style.border= "1px solid green";
                // document.getElementById("password").style.border= "1px solid green";
                // document.getElementById("phonenumber").style.border= "1px solid green";
                var str = "Sign Up";
                var result = str.link("Login Page/index.html");
                document.getElementById("button").innerHTML = result;

              }

       }

          var myInput = document.getElementById("password");
          var letter = document.getElementById("letter");
          var capital = document.getElementById("capital");
          var number = document.getElementById("number");
          var length = document.getElementById("length");

          myInput.onfocus = function() {
            document.getElementById("message").style.display = "block";
          }

          myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
          }

          myInput.onkeyup = function() {

            var lowerCaseLetters = /[a-z]/g;
            if(myInput.value.match(lowerCaseLetters)) {
              letter.classList.remove("invalid");
              letter.classList.add("valid");
            } else {
              letter.classList.remove("valid");
              letter.classList.add("invalid");
            }


            var upperCaseLetters = /[A-Z]/g;
            if(myInput.value.match(upperCaseLetters)) {
              capital.classList.remove("invalid");
              capital.classList.add("valid");
            } else {
              capital.classList.remove("valid");
              capital.classList.add("invalid");
            }


            var numbers = /[0-9]/g;
            if(myInput.value.match(numbers)) {
              number.classList.remove("invalid");
              number.classList.add("valid");
            } else {
              number.classList.remove("valid");
              number.classList.add("invalid");
            }


            if(myInput.value.length >= 8) {
              length.classList.remove("invalid");
              length.classList.add("valid");
            } else {
              length.classList.remove("valid");
              length.classList.add("invalid");
            }
          }
