<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/ping', function () {
    return 'ping test';
});
Route::post('/login', [AuthController::class, 'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::prefix('auth')
        ->controller(AuthController::class)
        ->group(function () {
            Route::post('/logout', 'logout');
            Route::get('/', 'user');
        });

     Route::prefix('admin')->group(['middleware' => ['restrictRole:admin']], function () {
        //Route::post('/users', [UserController::class, 'store']);//
        Route::resource('users', UserController::class)->only([
            'store', 'destroy'
        ]);
        
     });

    Route::group(['middleware' => ['restrictRole:admin,staff']], function () {
        Route::resource('orders', OrderController::class);
    });

    






});
