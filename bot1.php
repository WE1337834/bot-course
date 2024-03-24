<?php
    $data = file_get_contents('https://api.telegram.org/bot6120539034:AAEUBzNzkoOAi6dPebtqCcTuF_qkJD1u-sI/getUpdates');
    $data = json_decode($data, true);
?>