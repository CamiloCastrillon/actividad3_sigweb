<?php

	//Define los parametros de conexion a la gdb postgis
	define("PG_DB" , "t3_sigweb");
	define("PG_HOST" , "localhost");
	define("PG_USER" , "postgres");
	define("PG_PSWD" , "postgres");
	define("PG_PORT" , "5432");

	$dbcon = pg_connect("dbname=".PG_DB." host=".PG_HOST." user=".PG_USER ." password=".PG_PSWD." port=".PG_PORT."");

?>
