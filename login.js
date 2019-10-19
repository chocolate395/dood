

function SUBMIT(){
    var d=new Date();
    var result;
   var username=document.getElementById("username").value;
   var emailid=document.getElementById("emailid").value;
   var password=document.getElementById("password").value;

   if (username=="saketh" &&  emailid=="saketh@gmail.com" && password=="sakethkohli" ) 
{
   result="SUCCESSFULLY LOGGED IN AT "+d;
}

         
    

       else{
        result="TRY AGAIN";
    }
    document.getElementById("success").innerHTML=result;
}

// if(result=="SUCCESSFULLY LOGGED IN AT"){
//     GET=document.getElementById("p").innerHTML=d;
// }





