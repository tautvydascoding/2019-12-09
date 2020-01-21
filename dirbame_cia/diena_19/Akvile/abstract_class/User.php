<?php


abstract class User
{
    public $name;
    public $password;
    public $createdDate;
    public $lastLogin;

    abstract public function Loguot();

    public function clearlastLoginTime() {

        $this->lastLogin = 0;
    }


}
