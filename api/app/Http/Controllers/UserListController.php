<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserListController extends Controller
{
    public function getUserList()
    {
        $users = User::all();
        return response()->json(['orders' => $users]);
    }
}
