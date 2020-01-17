<?php
$klientoVardas = $_POST['vardas'];
$klientoEmail = $_POST['pastas'];
$klientoSritis = $_POST['sritis'];
$klientoKlausimas = $_POST['klausimas'];
print_r( $_POST);
include_once('libs/PHPMailer-master/PHPMailerAutoload.php');


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
    $mail->Host = 'tls://smtp.yahoo.com:587';
    $mail->SMTPSecure = 'ssl';                              // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                      // TCP port to connect to

    //Server settings
    $mail->SMTPDebug = 3;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP

    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'stogenzzo@yahoo.com';                 // SMTP username
    $mail->Password = 'programavimui1';                 // SMTP username

    //Recipients
    $mail->setFrom('stogenzzo@yahoo.com', 'Mailer');
    $mail->addAddress('stogenzzo@yahoo.com', 'Web Programuotojai');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo($klientoEmail, $klientoVardas);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoSritis;
    $mail->Body    = "<h1> $klientoKlausimas </h1></b>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
