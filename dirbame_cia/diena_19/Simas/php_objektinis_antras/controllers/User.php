<?php
abstract class User {
  public $name = "vardas";
  public $password = "slaptazodis";
  public $createdDate;
  public $lastLogin;
  abstract function logout();
  function clearlastLoginTime() {
    // KAZKOKS KODAS
  }
}
