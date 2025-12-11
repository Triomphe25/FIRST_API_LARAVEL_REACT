<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FilmController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Tes routes API iront ici
Route::get('/test', function () {
    return response()->json(['message' => 'API working!']);
});
Route::post('/films/store', [FilmController::class, 'store']);
Route::get('/films/{id}', [FilmController::class, 'show']);
Route::get('/films', [FilmController::class, 'index']);

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function(){
    
});
