

function SUBMIT(){
    var d=new Date();
    var result;
   var username=document.getElementById("username").value;
   var emailid=document.getElementById("emailid").value;
   var password=document.getElementById("password").value;
   if (username=="saketh"){
      if( emailid=="saketh@gmail.com"){
           if(password=="sakethkohli"){
               result="SUCCESSFULLY LOGGED IN AT";
           }
           else{
            result="TRY AGAIN";
        }
           
       }
       else{
        result="TRY AGAIN";
    }
    

    }
    else{
        result="TRY AGAIN";
    }
document.getElementById("success").innerHTML=result;
if(result=="SUCCESSFULLY LOGGED IN AT"){
    GET=document.getElementById("p").innerHTML=d;
}


}


