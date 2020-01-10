<?php
if(isset($_POST['email']) && isset($_POST['message'])) {
    echo "Jusu zinute: " . $_POST['message'];
}

require_once('libs/PHPMailer-master/PHPMailer-master/PHPMailerAutoload.php');

$client_email = isset($_POST['email']);

$message = isset($_POST['message']);

$mail = new PHPMailer(true);

try {
   //Server settings
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
   $mail->SMTPDebug = 3;                                 // Enable verbose debug output
   $mail->isSMTP();                                      // Set mailer to use SMTP

   $mail->SMTPAuth = true;                               // Enable SMTP authentication
   $mail->Username = 'testascoding@gmail.com';
   $mail->Password = 'slaptazodis';

                                     // TCP port to connect to

   //Recipients
   $mail->setFrom('testascoding@gmail.com', 'Vardas');
   $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
   $mail->addAddress('ellen@example.com');               // Name is optional
   $mail->addReplyTo($client_email, $client_email);
   // $mail->addCC('cc@example.com');
   // $mail->addBCC('bcc@example.com');

   // Attachments
   $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
   $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

   // Content
   $mail->isHTML(true);                                  // Set email format to HTML
   $mail->Subject = 'Here is the subject';
   $mail->Body    = "<b>$message</b>";
   $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

   $mail->send();
   echo 'Message has been sent';
} catch (Exception $e) {
   echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
