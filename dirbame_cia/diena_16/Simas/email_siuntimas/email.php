<?php

$klientoVardas = $_POST['vardas'];
$pastas = $_POST['pastas'];
$sritis = $_POST['sritis'];
$zinute = $_POST['zinute'];



require_once('libs/PHPMailer-master/PHPMailerAutoload.php');
// Instantiation and passing `true` enables exceptions
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
    $mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP

    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'testascoding@gmail.com';                 // SMTP username
    $mail->Password = 'slaptazodis';                        // SMTP password
                               // TCP port to connect to

    //Recipients
    $mail->setFrom('testascoding@gmail.com', 'prezidentas');
    $mail->addAddress('testascoding@gmail.com', 'as');     // Add a recipient
           // Name is optional
    $mail->addReplyTo($pastas, $klientoVardas);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $sritis;
    $mail->Body    = "<b>$zinute</b>";
    $mail->AltBody = $zinute;

    $mail->send();
    echo "<div>PAVYKO</div>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
