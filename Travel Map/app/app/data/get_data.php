<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: json;charset=utf-8");
$conn = new mysqli("serve", "用户名", "密码", "数据库名称");
$result = $conn->query("SELECT id, name, tag,address,lat,lng  FROM poi ORDER BY id");
$outp ="";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"name":"'   . $rs["name"]        . '",';
    $outp .= '"lat":"'   . $rs["lat"]        . '",';
    $outp .= '"lng":"'   . $rs["lng"]        . '",';
    $outp .= '"address":"'   . $rs["address"]        . '",';
    $outp .= '"tag":"'. $rs["tag"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
