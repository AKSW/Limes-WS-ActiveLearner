<?php
// Special thanks to Claus Stadler for this file :)
try {
     $dbtype        = "mysql";
     $dbhost        = "localhost";
     $dbname        = "swp12_11";
     $dbuser        = "swp12-11";
     $dbpass        = "atenappr"; // TOP SECRET

     $conn = new PDO("$dbtype:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

     switch ($_GET['action']) {
        case "addlink":
            addLink($conn);
            break;
        case "show":
            show($conn);
            break;
        case "herpderp":
            drop($conn);
            break;
        case "user":
            user($conn);
            break;
        default:
            echo("Error");
            break;
     }

     // Mark the connection for closing
     $conn = null;
}
catch(PDOException $e) {
     echo $e->getMessage();
}

function addLink($conn) {
     echo "success";
     $conn->exec('CREATE TABLE IF NOT EXISTS ratings (
         user_id TEXT, -- For now our id equals the user-name and therefore is text
         s TEXT,
         p TEXT,
         o TEXT,
         rating ENUM("accept", "reject", "unsure", "ignore"),
         tstamp DATETIME
     )');
     /* PRIMARY KEY(user_id, s, p, o) does not work, because we can't index text columns without specifying a length :/
      * We could use varchar(256) instead (greater values are AFAIK trimmed down to 256), but this might be too short for some URIs
      * May we should just do duplication checks on the client side... - sure, if that makes you happy :)
      */
     $insertStmtStr = "INSERT INTO ratings(user_id, s, p, o, rating, tstamp) VALUES (:user_id, :s, :p, :o, :rating, :tstamp)";
     $insertStmt = $conn->prepare($insertStmtStr);

     $mysqlDate = date('Y-m-d H:i:s', time());
     $insertStmt->execute(array(
         ":user_id" => $_GET['user_id'],
         ":s" => $_GET['addr1'],
         ":p" => "http://www.w3.org/2002/07/owl#sameAs",
         ":o" => $_GET['addr2'],
         ":rating" => $_GET['linkstate'],
         ":tstamp" => $mysqlDate));
}

function show($conn) {
     $sth = $conn->query ("SELECT * FROM ratings");
     //printf("Number of columns in result set: %d\n", $sth->columnCount());
     //$count = 0;
     while ($row = $sth->fetch()) {
         print_r($row);
         //$count++;
     }
     //printf("Number of rows in result set: %d\n", $count);
}

function user($conn) {
     $sth = $conn->query ("SELECT r.rating, r.s, r.o FROM ratings AS r WHERE r.user_id = ".$_GET['user_id']);
     while ($row = $sth->fetch()) {
         print_r($row);
     }
}


function drop($conn) {
    $conn->exec("DROP TABLE IF EXISTS ratings");
}
?>