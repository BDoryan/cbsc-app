<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'App\Http\Controllers\UserController@me');
});

Route::get('/user/login', function (Request $request) {
    return response()->json(['message' => 'Invalid credentials'], 401);
})->name('login');
Route::post('/user/login', 'App\Http\Controllers\UserAuthController@login');

Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::get('/users/licensed', 'App\Http\Controllers\UserController@licensed');
Route::get('/users/managing', 'App\Http\Controllers\UserController@managing');

Route::get('/users/{id}', 'App\Http\Controllers\UserController@show');
Route::post('/users', 'App\Http\Controllers\UserController@store');
Route::put('/users/{id}', 'App\Http\Controllers\UserController@update');
Route::delete('/users/{id}', 'App\Http\Controllers\UserController@delete');
Route::get('/users/search', 'App\Http\Controllers\UserController@search');

Route::get('/convocations', 'App\Http\Controllers\ConvocationController@index');
Route::get('/convocations/{id}', 'App\Http\Controllers\ConvocationController@show');
Route::post('/convocations', 'App\Http\Controllers\ConvocationController@store');
Route::put('/convocations/{id}', 'App\Http\Controllers\ConvocationController@update');
Route::delete('/convocations/{id}', 'App\Http\Controllers\ConvocationController@delete');
Route::get('/convocations/search', 'App\Http\Controllers\ConvocationController@search');
