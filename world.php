<?php

$country = $_GET['country'];
$all = $_GET['all'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$stmt2 = $conn->query("SELECT * FROM countries");

//$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($all == 'true')
{
    $results = $stmt2->fetchAll(PDO::FETCH_ASSOC);
}
else
{
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

if (count($results) == 0)
{
    echo 'You may enter a country to lookup, or check the box to lookup all countries.';
}
else
{
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
echo '</ul>';
}