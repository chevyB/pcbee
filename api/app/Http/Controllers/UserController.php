<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{

    public function store(UserRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create($validatedData);
        return response()->json(['user' => $user], 201);
    }
    
}
