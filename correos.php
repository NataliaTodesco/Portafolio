<?php
    $destinatario = 'nstodesco@gmail.com';
    $nombre = $_POST['nombre'];
    $asunto = 'He visto tu página y me gustaria contáctarte';
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $header = "Enviado desde la página de Todesco Natalia Sabrina";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario,$asunto,$mensajeCompleto,$header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>