<?php

print_r($_POST);

$klientoVardas = $_POST['vardas'];
$klientoEmail = $_POST['email'];
$klientoSritis = $_POST['sritis'];
$klientoKlausimas = $_POST['klausimas'];

require_once('libs/PHPMailer-master/PHPMailerAutoload.php');

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
    $mail->Username = 'testascoding@gmail.com';                 // SMTP username                                // TCP port to connect to
    $mail->password = 'slaptazodis';                 // SMTP password                               // TCP port to connect to

    //Recipients
    $mail->setFrom($klientoEmail, 'Prezidentas');
    $mail->addAddress('testascoding@gmail.com', 'Belekas');     // Add a recipient
    $mail->addReplyTo($klientoEmail , $klientoVardas);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoSritis;
    $mail->Body    = "<h1> $klientoKlausimas </h1> <br />";
    $mail->AltBody = $klientoKlausimas;

    $mail->send();


    echo '<div style =" color:green">
    pavyko issiusti laiska
    </div>';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
