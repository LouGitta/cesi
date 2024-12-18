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

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $fruit_id = $_POST['produit'];
        $quantity = $_POST['number'];
        
        if (!empty($fruit_id) && !empty($quantity)) {
            try {
                // La requête est préparée par sécurité //
                $sql = "INSERT INTO invoice (quantity, fruit_id) VALUES (:quantity, :fruit_id)";
                $req = $pdo->prepare($sql);
        
                // Lier les valeurs aux paramètres //
                $req->bindParam(':quantity', $quantity);
                $req->bindParam(':fruit_id', $fruit_id);
        
                // Exécuter la requête //
                $req->execute();
        
            } catch (PDOException $error) {
                echo "Erreur : " . $error->getMessage();
            }
    }}
    header("Location: index.php");
?>