<?php
include('iEdit.php');
include('User.php');
class Admin extends User implements Edit {
  function changeName($a) {
    $this -> name = $a;
  }
  function getName() {
    echo $this -> name;
  }
  function isLogin() {
    echo "True";
  }
  function logout() {
    // nieko
  }
}
