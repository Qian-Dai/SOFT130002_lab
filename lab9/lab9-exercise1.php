<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
echo "This page was generated: " . date("l,F dS, Y G:i:s") . "<hr/>";
echo "<br>"; //notice we must echo tags in php.
$year = date("Y");$yearhaveday = date("z");$yearday = 0;if($year%100==0){    if ($year%400==0){       $yearday = 366;    }    else{$yearday = 365;}}else{    if($year%4==0&&$year%100!=0){        $yearday = 366;    }    else {$yearday = 365;}}$remaining = $yearday - $yearhaveday;echo "There are ". $remaining . " days left in the year";
?>
</body>
</html>