<!DOCTYPE html>
<html>
<head>
<title>Lecture5 Sample</title>
</head>
<body>
<?php 

$temp = "test";

function test() {
global $temp;
$temp = "changed";
return $temp;
}

$temp1 = test();
$temp2 = $temp.$temp1;

echo '\$temp2 is $temp2';


?>
</body>
</html>