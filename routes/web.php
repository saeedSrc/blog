<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome')->with(['var'=> 2593]);
//});


Route::get('/', 'App\Http\Controllers\HomeController@home');
Route::get('/show-user/{name}', 'App\Http\Controllers\HomeController@show');
//Route::get('/test', 'App\Http\Controllers\TestController@test');
//Route::get('/category', 'App\Http\Controllers\CategoryController@index');
//Route::get('/category/create', 'App\Http\Controllers\CategoryController@create');
//Route::post('/category/store', 'App\Http\Controllers\CategoryController@store');
//Route::get('/category/show/{id}', 'App\Http\Controllers\CategoryController@show');
//Route::put('/category/update/{id}', 'App\Http\Controllers\CategoryController@update');
//Route::delete('/category/destroy/{id}', 'App\Http\Controllers\CategoryController@destroy');

Route::resource('category', 'App\Http\Controllers\CategoryController'); //  very good
//Route::get('user/{id}?', 'App\Http\Controllers\ShowProfile'); //  very good
//Route::get('redirect-with-helper', function () {
//    return redirect('category');
//    return redirect()->to('category/create');
//    return redirect()::to('category/create');

//} );



//Route::middleware('auth')->group('/', function () {
//    Route::get('user', function () {
//     return view('dashboard');
//     }
//    );
//
//    Route::get('admin', function () {
//        return view('account');
//    }
//    );
//});

//Route::prefix('dashboard')->group(function (){
//    Route::get('/', function () {
//        return view('dashboard');
//    }
//    );
//
//    Route::get('menu', function () {
//        return view('dashboard');
//    }
//    );
//});

//Route::group(['prefix' => 'dashboard'],   function (){
//    Route::get('/', function () {
//        return 'dashboard';
//    }
//    );
//
//    Route::get('menu', function () {
//        return 'dashboard';
//    }
//    );
//});


//Route::domain('test.mayapp')->group(function (){
//    Route::get('/', function () {
//        return 'dashboard';
//    }
//    );
//
//    Route::get('menu', function () {
//        return 'dashboard';
//    }
//    );
//});

//Route::get('redirectToCategory', function () {
////    return redirect()->route('category.show', ['test1' => 43]);
//    return redirect()->back();
//});

Route::redirect('myRoute', 'category/show');