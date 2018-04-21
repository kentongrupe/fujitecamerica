<?php

    $address = $_POST["address"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $facility = $_POST["facility"];
    $description = $_POST["description"];

    $to = "info@fujitecamerica.com";
    $subject = "Contact";
    $headers = "From: " . $email;
    $body = ""
        . "Address: " . $address . "\n"
        . "Name: " . $name . "\n"
        . "Email: " . $email . "\n"
        . "Phone: " . $phone . "\n"
        . "Facility: " . $facility . "\n"
        . "Description: " . $description . "\n"
        ;

    echo mail($to, $subject, $body, $headers);

?>
