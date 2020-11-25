function checkForLastName() {
   var firstname = document.getElementById("firstName").value;
        if(firstname >=0 && firstname <=9 ) {
    alert("Please enter  0--9");
            return false;
     }
    else if (document.getElementById("lastName").value.length <= 3) {
        alert("Please enter your  lastname");
                return false;
         }

     }

    