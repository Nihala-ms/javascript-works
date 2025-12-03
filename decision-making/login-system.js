var dbPassword = "password123@";
var dbOtp = 4565;
var userPassword = "password123@";
var userOtp = 4534;

if (userPassword == dbPassword) { //T password are same
    if (dbOtp == userOtp) {  //F false are different
        console.log("login successfull");
    }
        
    else{
        console.log("Incorrect otp"); // display

        }
}

else {
    console.log("incorrect password");//F password are same

}