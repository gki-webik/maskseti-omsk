<?php
require_once("/home/vostok1/init.php");
use YooKassa\Client;
function generationID()
{
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0xffff)
    );
}
if (isset($_POST["amount"]) && isset($_POST["email"]) && isset($_POST["amount"])) {
    if ($_POST["amount"] >= 1) {
        $email = $_POST["email"];

        $generationID = generationID();
        $data = array(
            'amount' => array(
                'value' => $_POST["amount"],
                'currency' => 'RUB',
            ),
            'confirmation' => array(
                'type' => 'redirect',
                'return_url' => 'https://maskseti-omsk.ru/success',
            ),
            'capture' => true,
            'description' => "Пожертвование для СВО",
            'metadata' => array(
                'order_id' => 1,
            ),
            "receipt" => array(
                "customer" => array(
                    "email" => $email,
                ),
                "items" => array(
                    array(
                        "description" => "Пожертвование для СВО",
                        "quantity" => "1.00",
                        "amount" => array(
                            "value" => $_POST["amount"],
                            "currency" => "RUB"
                        ),
                        "tax_system_code" => "1",
                        "vat_code" => "1",
                        "payment_mode" => "full_prepayment",
                        "payment_subject" => "service"
                    ),
                ),
            ),
            "test" => true,
            /* 2200000000000004 */
        );
        $data = json_encode($data, JSON_UNESCAPED_UNICODE);
        $ch = curl_init('https://api.yookassa.ru/v3/payments');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_USERPWD, '291581:test_JKrcV6SNaPJHwn6Z0v7bDEhWbIKCarc9s-LND1ZYCys');
        // curl_setopt($ch, CURLOPT_USERPWD, '289775:live_TM81gZhOKeXuAdR1L6XGBLqBEd9-NA_yTPjdO42JmXY');
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Idempotence-Key: ' . $generationID));
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $res = curl_exec($ch);
        curl_close($ch);
        $res = json_decode($res, true);
        /* print_r($res); */
        $session_token = $v1->getMyToken();
        $idPay = $res['id'];

        header('Location: ' . $res['confirmation']['confirmation_url'], true, 301);
        exit();
    }
}
?>