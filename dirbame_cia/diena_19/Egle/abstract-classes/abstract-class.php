<?php

// include('interface.php');




abstract class User{
  public $name = "John";
  public $password = "qwerty";
  public $createdDate = "2020-01-01";
  public $lastLogin = "2020-01-10";
  abstract public function Loguot();
  public function clearlastLoginTime(){

  }
}
