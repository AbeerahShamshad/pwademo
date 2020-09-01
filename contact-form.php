<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "muhammad.49331@iqra.edu.pk";
  $headers = "from: ".$email;
  $txt = "you received an email from ".$name.". \n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsend");
}

?>

