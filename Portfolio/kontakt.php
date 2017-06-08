<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$dokogo = "psylwia@gmail.com";

$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";


$sukces = mail($dokogo, $wiadomosc, "Od: <$email>");

if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>