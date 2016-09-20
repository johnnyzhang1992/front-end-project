<?php
$servername = "qdm114439499.my3w.com";
$username = "qdm114439499";
$password = "ab199255";

// 创建连接
$conn = new mysqli($servername, $username, $password);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
echo "连接成功";
?>