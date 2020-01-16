<?php

include('interface.php');
include('abstract-class.php');



class Admin extends User implements Edit{
public function getName(){
  $this->$name = $name;
}
public function changeName($a){
  $this->name = $a;
}

public function isLogin(){
  echo "logged in";
}

 public function Loguot(){
   echo "logged out";
 }
}


$Admin = new Admin();

echo $Admin->name . "<br />";

$Admin-> changeName("Melisa");

echo $Admin->name . "<br />";
