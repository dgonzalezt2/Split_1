function checkButton() {  
            if(document.getElementById('radio1').checked) { 
                document.getElementById("disp").innerHTML 
                    = document.getElementById("radio1").value 
                    + " radio button is checked"; 
            } 
            else if(document.getElementById('radio2').checked) { 
                document.getElementById("disp").innerHTML 
                    = document.getElementById("radio2").value 
                    + " radio button is checked";   
            } 
            else if(document.getElementById('radio3').checked) { 
                document.getElementById("disp").innerHTML 
                    = document.getElementById("radio3").value 
                    + " radio button is checked";   
            } 
            else if(document.getElementById('radio4').checked) { 
                document.getElementById("disp").innerHTML 
                    = document.getElementById("radio4").value 
                    + " radio button is checked";   
            }
            else if(document.getElementById('radio5').checked) { 
                document.getElementById("disp").innerHTML 
                    = document.getElementById("radio5").value 
                    + " radio button is checked";   
            }
            else { 
                document.getElementById("error").innerHTML 
                    = "You have not selected any season"; 
            } 
        }