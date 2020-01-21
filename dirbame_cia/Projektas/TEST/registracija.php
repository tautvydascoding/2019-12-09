<!DOCTYPE html>
<html>

<head>

  <meta charset="utf-8">


  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/normalize.css">

  <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style2.css">
</head>

<body>

  <main class="container">
    <div class="row">
      <div class="col-12">
        <form action="controlers/submit.php" method="get">
          <ul class="flex-outer">
            <li>
              <label for="first name">First name</label>
              <input type="text" name="name" placeholder="Enter your first name">
            </li>
            <li>
              <label for="last-name">Last name</label>
              <input type="text" id="last-name" placeholder="Enter you last name">
            </li>
            <li>
              <label for="email">E-mail</label>
              <input type="text" name="e_mail" placeholder="Enter your email">
            </li>
            <li>
              <label for="phone">Mobil phone number</label>
              <input type="text" id="phone" placeholder="Enter mobil phone number">
            </li>
            <li>
              <label for="city">City</label>
              <input type="text" id="city" placeholder="Enter city">
            </li>
            <li>
              <label for="postCode">Post code</label>
              <input type="text" id="postCode" placeholder="Enter Post code">
            </li>
            <br>
            <li>
              <label for="password1">Password</label>
              <input type="text" name="password" placeholder="Enter password">
            </li>
            <li>
              <label for="password2">Password</label>
              <input type="text" name="password2" placeholder="Repeat password">
            </li>
            <li>
              <label for="massage">Message</label>
              <textarea rows="8" id="maessage" placeholder="Text"></textarea>
            </li>
            <br>
            <li>
              <p>Age</p>
              <ul class="flex-inner">

            </li>
            <li>
              <input type="checkbox" id="twenty-to-twentynine">
              <label for="twenty-to-twentynine">20-29 </label>
            </li>
            <li>
              <input type="checkbox" id="thirty-to-thirtynine">
              <label for="thirty-to-thirtynine">30-39</label>
            </li>
            <li>
              <input type="checkbox" id="forty-to-fortynine">
              <label for="forty-to-fortynine">40-49</label>
            </li>
            <li>
              <input type="checkbox" id="fifty-to-fiftynine">
              <label for="fifty-to-fiftynine">50-59</label>
            </li>
            <li>
              <input type="checkbox" id="sixty-to-sixtynine">
              <label for="sixty-to-sixtynine">60-69</label>
            </li>
            <li>
              <input type="checkbox" id="other">
              <label for="other">Other</label>
            </li>
          </ul>
          <li>
            <br>
            <input class="submit bg-primary" method="get" name="pateikti" type="submit" value="Registruotis">
            <input class="submit bg-primary" method="" name="nunulinti" type="reset" value="Reset">

          </li>
          </ul>
          <a align="center" class="btn bg-primary" href='index.php' method='get'>Grįžti</a>
        </form>
      </div>
    </div>
  </main>
</form>

</body>

</html>
