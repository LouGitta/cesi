<?php
session_start();
$_SESSION["prix_ht_total"] = 0;
include('get.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title>Facture</title>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

</head>
<body>
	<div class="container">
		<table class="table table-striped">
			<tbody>
                <form action="put.php" method="POST">
                    <td>
                        <select class="form-control" id="produit" name="produit">
                            <?php 
                                foreach ($_SESSION['fruits'] as $fruit) {
                                    echo "<option value=\"".htmlspecialchars($fruit["id"])."\">".$fruit["name"]."</option>";
                                }                                 
                            ?>
                        </select>
                    </td>
                    <td><input type="number" name="number" min="0" class="form-control" id="number" placeholder="Quantité"></td>
                    <td><button type="submit" id="add" class="btn btn-primary">Ajouter le produit</button></td>
                </form>
			</tbody>
		</table>
		<div id="facture">
            <table class="table table-striped table-hover"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix à l'unité</th>
                        <th>Prix global</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        
                        foreach ($_SESSION['invoices'] as $invoice) {
                            foreach ($_SESSION['fruits'] as $fruit) {
                                if ($fruit['id'] == $invoice["fruit_id"]) {
                                    $_SESSION["prix_ht_total"] += $fruit["price"] * $invoice["quantity"];
                                    
                                    echo "<tr>";
                                    echo "<td>".$invoice["id"]."</td>";
                                    echo "<td>".$fruit["name"]."</td>";
                                    echo "<td>".$invoice["quantity"]."</td>";
                                    echo "<td>".$fruit["price"]."</td>";
                                    echo "<td>".$fruit["price"] * $invoice["quantity"] ."</td>";
                                    echo "</tr>";
                                    break;
                                }
                            }
                        }
                        $_SESSION["prix_tva_total"] = $_SESSION["prix_ht_total"] * 0.2;

                        ?>
                        <tr style="border-top:2px solid #AAA;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total HT</td>
                            <td>
                                <?php
                                echo $_SESSION["prix_ht_total"]."€"
                                ?>
                            </td>
                        </tr>
                        <tr style="border-bottom:2px solid #AAA;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total TVA</td>
                            <td>
                                <?php
                                echo $_SESSION["prix_tva_total"]."€";
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total TTC</td>
                            <td>
                                <?php
                                echo $_SESSION["prix_ht_total"]+$_SESSION["prix_tva_total"]."€"
                                ?>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
	</div>
</body>
</html>