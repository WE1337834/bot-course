<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    $cookie = ['Будьте собой; все остальные уже заняты','В счастье не возносись, в несчастье не унижайся','Возможностей не бывает, вы их создаете','Все в ваших руках, поэтому их нельзя опускать'];
    $cookie_i = rand(0,4);

    $yn = ['Yes', 'No'];
    $yn_r = rand(0,1);
    $id = $data['message']['chat']['id'];
    $num = rand(1,5);
    function send($m){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot6120539034:AAEUBzNzkoOAi6dPebtqCcTuF_qkJD1u-sI/sendMessage');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $m);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $exec = curl_exec($ch);
        curl_close($ch);
    }
   
    function send_photo($m){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot6120539034:AAEUBzNzkoOAi6dPebtqCcTuF_qkJD1u-sI/sendPhoto');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $m);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $exec = curl_exec($ch);
        curl_close($ch);
    }
    $button_main = json_encode([
        'keyboard' =>[
            [['text' => 'Открыть печеньку'], ['text' => 'Показать данные']],
            [['text' => 'Yes|No']], [['text' => 'Угадать число']]
        ]
    ]);
    $button_date = json_encode([
        'keyboard' =>[
            [['text' => 'Дата'], ['text' => 'Время']],
            [['text' => 'id чата'], ['text' => 'IP адрес']],
            [['text' => 'Главная']],
        ]
    ]);
    $button_num = json_encode([
        'keyboard' =>[
            [['text' => '1'], ['text' => '2']],
            [['text' => '3'], ['text' => '4']],
            [['text' => '5']],
        ]
    ]);

    $t = ['chat_id' => $id, 'text' => 'Выберите кнопку', 'reply_markup' => $button_main];
    $text = $data['message']['text'];
    switch($text){
        case 'Показать данные':
            $t = ['chat_id' => $id, 'text' => 'Выберите' , 'reply_markup' => $button_date];
        
            break;
        case 'Дата':
            $t = ['chat_id' => $id, 'text' => date('d.m.Y') , 'reply_markup' => $button_date];
            break;
        case 'Время':
            $t = ['chat_id' => $id, 'text' => date('H:i:s') , 'reply_markup' => $button_date];
            break;
        case 'id чата':
            $t = ['chat_id' => $id, 'text' => $id , 'reply_markup' => $button_date];
            break;
        case 'IP адрес':
            $t = ['chat_id' => $id, 'text' => $_SERVER['SERVER_ADDR'] , 'reply_markup' => $button_date];
            break;
        case 'Главная':
            $t = ['chat_id' => $id, 'text' => 'Выберите кнопку' , 'reply_markup' => $button_main];
            break;
        case 'Yes|No':
            $t = ['chat_id' => $id, 'text' => $yn[$yn_r] , 'reply_markup' => $button_main];
            break;
        case 'Угадать число':
            $t = ['chat_id' => $id, 'text' => 'Угадайте число от 1 до 5' , 'reply_markup' => $button_num];
            break;
        case 1:
            rn($text);
            break;
        case 2:
            rn($text);
            break;
        case 3:
            rn($text);
            break;
        case 4:
            rn($text);
            break;
        case 5:
            rn($text);
            break;
        default:
            $t = ['chat_id' => $id, 'text' => 'Вы не выбрали кнопку ', 'reply_markup' => $button_main];
        }
   

    send($t);
    send_photo($t_photo)
?>