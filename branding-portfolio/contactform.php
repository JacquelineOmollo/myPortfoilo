<?php

if (isset($_POST["submit"])) {
  $name = $POST["name"];
  $email = $_POST["email"];
  $comment = $POST["comment"];

  $mailto = "JacquelineOmollo@gmail.com";
  $headers = "From: ".$email;
  $txt = "You have received and email from " .$name. ".\n\n".$comment;

  mail($mailto, $txt, $headers);
  header("Location: index.php?mailsend");
}