<?php

    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $description = $_POST["description"];

    $to = "info@fujitecamerica.com";
    $subject = "Support";
    $headers = "From: " . $email;
    $body = ""
        . "Name: " . $name . "\n"
        . "Company: " . $company . "\n"
        . "Email: " . $email . "\n"
        . "Phone: " . $phone . "\n"
        . "Description: " . $description . "\n"
        ;

    echo mail($to, $subject, $body, $headers);

?>
