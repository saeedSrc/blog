<?php
/**
 * Created by PhpStorm.
 * User: saeed
 * Date: 12/1/20
 * Time: 10:20 PM
 */

namespace App\Http\View\composers;


class test
{
    public function compose($view)
    {
        $view->with('share', "this is share from class !");
  }

    public function car()
    {
      return "pride";
  }
}