<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Thank you!</title>

   <link rel="stylesheet" href="pizza.css">
</head>
<body>

   <?php
      $username = $_POST["name"]; 
      $size = $_POST["size"];
      $crust = $_POST["crust"];
   ?>


   <h1>Thank you <?php echo $username; ?> for your order!</h1>
   <p>
      Your total is: 
      <?php
         $total = 0;
         
         if($size == "large") {
            $total = $total + 9.95;
         }
         else {
            $total = $total + 12.95;
         }

         if(isset($_POST["toppings"])) {
            $toppings = $_POST["toppings"];
            $total = $total + (count($toppings)*1.25);
         }


         if($crust == "deep") {
            $total = $total + 2;
         }

         echo $total;

         $order[0] = $username;
         $order[1] = $crust;
         $order[2] = $size;
         $order[3] = $total;

         if(isset($toppings)) {
            if(count($toppings) == 2)  {
               $order[4] = $toppings[0];
               $order[5] = $toppings[1];
            }
            else {
               if ($toppings[0] != NULL) {
                  $order[4] = $toppings[0];
               }
               else {
                  $order[4] = $toppings[1];
               }
            }
         }



         file_put_contents("pizza.txt", $order);
      ?>


   </p>


</body>
</html>