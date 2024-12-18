<?php 
// Paramètres //
$host = 'localhost';
$dbname = 'tp_fruits';
$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
$username = 'root';
$password = '';

try {
    // Création de l'instance de PDO //
    $pdo = new PDO($dsn, $username, $password);

    // Définition du mode d'erreur //
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "Connexion réussie à la base de données MySQL !";
} catch (PDOException $error) {
    // En cas d'échec de la connexion, afficher l'erreur
    echo "Erreur de connexion : " . $error->getMessage();
}

try {
    $sql = "SELECT id,name,price FROM fruit";
    // Aucune donnée exterieur n'est insérée dans la requpete SQL, inutile de la préparer dans ce cas //
    $req = $pdo->query($sql);
    $fruits = $req->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION['fruits'] = $fruits;
} catch (PDOException $error) {
    echo "Erreur : " . $error->getMessage();
}

try {
    $sql = "SELECT id,quantity,fruit_id FROM invoice";
    // Aucune donnée exterieur n'est insérée dans la requpete SQL, inutile de la préparer dans ce cas //
    $req = $pdo->query($sql);
    $invoices = $req->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION['invoices'] = $invoices;
} catch (PDOException $error) {
    echo "Erreur : " . $error->getMessage();
}
?>