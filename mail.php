<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['mobile'];
$message= $_POST['message'];
$to = "rakibs232309@gmail.com";
$subject = "Mail From website codeconia";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n mobile number =" . $number . "\r\n message = " . $message;

$headers = "From: rakib232309@gmail.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>