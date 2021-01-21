<!DOCTYPE html>
<html lang="en">

<?php

if (isset($_POST['message'])) {
    $chosenDate = $_POST['message'];
}

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <title>ParallelConverter</title>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Parallel World Converter</h1>
        </div>
        <div class="date"></div>
        <ul class="worlds">
            <li class="world base-world" id="Earth">
                <img src="images/61XUwqbhVvL._AC_SL1420_.bmp" class="flag">
                <div class="info">
                    <p class="input"><input value="" autocomplete="off" type="date" id="chosenDateID" name="chosenDate" /></p>
                    <p class="world-name" id="base-world-text" style="margin-left: 0;">Choose a date</p>
                </div>
            </li>

            <li class="world alternate-world" id="A">
                <img src="images/1200px-Flag_of_the_First_Galactic_Empire.svg.bmp" class="flag">
                <div class="info">
                    <p class="world-name">World A</p>
                    <p class="base-world-date"></p>
                </div>
            </li>

            <li class="world alternate-world" id="B">
                <img src="images/340.bmp" class="flag">
                <div class="info">
                    <p class="world-name">World B</p>
                    <p class="base-world-date"></p>
                </div>
            </li>

            <li class="world alternate-world" id="C">
                <img src="images/fic-ufp.bmp" class="flag">
                <div class="info">
                    <p class="world-name">World C</p>
                    <p class="base-world-date"></p>
                </div>
            </li>
        </ul>
        <button onclick="getDate()" value="Convert Date" name="convert" class="convert-btn">Convert Date</button>
    </div>
</body>

<script type="text/javascript" src="js/script.js"></script>

</html>