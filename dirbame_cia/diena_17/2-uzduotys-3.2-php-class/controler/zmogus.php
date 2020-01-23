<?php
  // class zmogus{
  //   public $vardas = 'none';
  //   public $ugis = 0;
  //   public function getManoUgis(){
  //     return $this->ugis;
  //   }
  //   public function getManoVardas(){
  //     return $this->vardas;
  //   }
  //   public function setManoUgis($x){
  //     $this->ugis = $x;
  //   }
  //   public function setManoVardas($x){
  //     $this->vardas = $x;
  //   }
  // }


  // 3 UZDUOTIS
  class zmogus{
    private $vardas = 'none';
    private $ugis = 0;
    public function getManoUgis(){
      return $this->ugis;
    }
    public function getManoVardas(){
      return $this->vardas;
    }
    function __construct($var, $ug){
      $this->vardas = $var;
      $this->ugis = $ug;
    }
  };
