<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function home()
    {
//        $users = DB::table('users')->where('id', 1)->first()->email;
//        $users = DB::table('users')->where('id', 1)->orWhere('id', 2)->get();
        $users = DB::table('users')->max('id');
        $users = DB::table('posts')
            ->join('users', 'posts.user_id', '=', 'users.id')->groupBy('users.id')->select('email','users.id')
            ->get();
        dd($users);
        return view('welcome');
    }
}
