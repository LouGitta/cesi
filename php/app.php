
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
    
      <body>
        <div class="container p-5">
          <form class="col-4" method="POST">
            <input
              type="text"
              class="form-control"
              name="id"
              placeholder="Id"
            />
            <input
              type="text"
              class="form-control my-3"
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              class="form-control my-3"
              name="age"
              placeholder="Age"
            />
    
            <button class="btn btn-primary" type="submit">Envoyer</button>
          </form>
        </div>
      </body>
    </html>
    
<?php 
    // Paramètres //
    $host = 'localhost';
    $dbname = 'demo_php';
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
        $id = $_POST['id'];
        $name = $_POST['name'];
        $age = $_POST['age'];

        if (!empty($id) && (!empty($name) || !empty($age) || is_numeric($age))) {

            try {
                $sql = "UPDATE users SET name=?, age=? WHERE id=?";
                $req= $pdo->prepare($sql);
                $req->execute([$name, $age, $id]);
                echo "Utilisateur modifié avec succès.<br>";
            } catch (PDOException $error) {;
                echo "Erreur : " . $error->getMessage();
            }

        }elseif (!empty($name) && !empty($age) && is_numeric($age)) {
            try {
        
                // La requête est préparée par sécurité //
                $sql = "INSERT INTO users (name, age) VALUES (:name, :age)";
                $req = $pdo->prepare($sql);
        
                // Lier les valeurs aux paramètres //
                $req->bindParam(':name', $name);
                $req->bindParam(':age', $age);
        
                // Exécuter la requête //
                $req->execute();
        
                echo "Nouvel utilisateur ajouté avec succès.<br>";
            } catch (PDOException $error) {
                echo "Erreur : " . $error->getMessage();
            }
            
        }elseif (!empty($id)) {
            try {
                $sql = "DELETE FROM users WHERE id=?";
                $req= $pdo->prepare($sql);
                $req->execute([$id]);
                echo "Utilisateur supprimé avec succès.<br>";

            } catch (PDOException $error) {;
                echo "Erreur : " . $error->getMessage();
            }
        }
    }


    try {
        $sql = "SELECT id, name, age FROM users";
        // Aucune donnée exterieur n'est insérée dans la requpete SQL, inutile de la préparer dans ce cas //
        $req = $pdo->query($sql);

        // fetch permet de boucler sur chacune des lignes contenue dans la réponse //
        while ($row = $req->fetch(PDO::FETCH_ASSOC)) {
            echo ("id: " . $row["id"] . ", name : " . $row["name"] . ", age : " . $row["age"] . "<br>");
        }
    } catch (PDOException $error) {;
        echo "Erreur : " . $error->getMessage();
    }
  



?>