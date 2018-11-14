<?php
 
// Get values from form
$name=$_POST['name'];
$email=$_POST['email'];
$help=$_POST['help'];
//$phone=$_POST['phone'];
 
$to = "aaronneeley@gmail.com";
$subject = "Inquiry from aaronneeley.com";
$message = " Name: " . $name . "\r\n City: " . $email . "\r\n Inquiry: " . $help;
 
 
$from = "myself";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='success.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Please try again.";
}
 

?>