<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class TestServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
//        View::share('share', "this is shared variable !");

//       view()->composer('*', function ($view){
//
//            $view->with('share', 'this is share!');
//        });

       view()->composer('*', \App\Http\View\composers\test::class );
    }
}
