<?php
    header("Access-Control-Allow-Origin: *");
    
    $host = "localhost";
    $dbname = "t3_sigweb";
    $user = "postgres";
    $password = "postgres";

    $conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

    if (!$conn) {
        echo "Error de conexión a la base de datos.";
        exit;
    }
?>