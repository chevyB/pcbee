<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select(['name', 'username', 'phone', 'position', 'role'])->get();
        return response()->json(['users' => $users]);
    }
}
