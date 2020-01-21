<?php

include('IEdit.php');
include('User.php');

class Admin extends User implements Edit{

    public function changeName($a) {
        $this->name = $a;

    }

    public function getName() {
        return $this->name;
    }

    public function isLogin() {
        if(isstet($this->lastLogin)) {
            return 1;
        }
    }

    public function Loguot() {
        $this->lastLogin = 0;
    }
}
