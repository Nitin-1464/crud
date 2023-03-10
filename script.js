function saveDate()
            {
               let name,email,number,birthdate,appointment,color,payment,age,checkbox,upload;
                name = document.getElementById("name").value;
                email = document.getElementById("email").value;
                number = document.getElementById("phone").value;
                birthdate = document.getElementById("birthdate").value;
                appointment = document.getElementById("appointment").value;
                color = document.getElementById("color").value;
                payment = document.getElementById("payment").value;
                age = document.getElementById("age").value;
                checkbox = document.getElementById("checkbox").value;
                upload = document.getElementById("upload").value;
              
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("number",number);
                localStorage.setItem("birthdate",birthdate);
                localStorage.setItem("appointment",appointment);
                localStorage.setItem("color",color);
                localStorage.setItem("payment",payment);
                localStorage.setItem("age",age);
                localStorage.setItem("checkbox ",checkbox );
                localStorage.setItem("upload",upload);

                
            }

             function seterror(id,error){

                element = document.getElementById(id);
                element.getElementByClassName('form')[0].innerHTML = error;
             }
            function validateForm() {
                 var returnval = true ;
                  
                 var name = document.forms['form']["name"].value;
                 if(name.length<5){
                    seterror("name","*short");
                    returnval = false;
                 }
                }