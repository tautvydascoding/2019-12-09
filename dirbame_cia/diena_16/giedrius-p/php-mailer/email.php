<?php
print_r($_POST);
$klientoVardas = $_POST['vardas'];
$klientoPastas = $_POST['pastas'];
$klientoSriti = $_POST['sritis'];
$klientoKlausimas = $_POST['klausimas'];

require_once('libs/PHPMailer-master/PHPMailerAutoload.php');

$mail = new PHPMailer(true);

try {
  $mail->SMTPOptions = array(
      'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
      )
  );
  $mail->Host = 'tls://smtp.gmail.com:587';
  $mail->SMTPSecure = 'ssl';                              // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                      // TCP port to connect to

  //Server settings
  $mail->SMTPDebug = 1;                                 // Enable verbose debug output
  $mail->isSMTP();                                      // Set mailer to use SMTP

  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'liliaksesuarai@gmail.com';
  $mail->Pasword = 'slaptazodis';
                                        // TCP port to connect to

    //Recipients
    $mail->setFrom('liliaksesuarai@gmail.com', 'Prezidentas');
    $mail->addAddress('liliaksesuarai@gmail.com', 'lili aksesuarai');     // Add a recipient            // Name is optional
    $mail->addReplyTo($klientoPastas, 'Information');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoSriti;
    $mail->Body    = "<h1>$klientoKlausimas</h1></b>";
    $mail->AltBody = $klientoKlausimas;

    $mail->send();
    echo "<div>
    PAVYKO ISSIUSTI LAISKA
    </div>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

 ?>
