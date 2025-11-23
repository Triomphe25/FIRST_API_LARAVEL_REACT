<?php

use App\Http\Controllers\Api\FilmController;
use Illuminate\Support\Facades\Route;

// Route::get('/films', [FilmController::class, 'index']);
// Route::post('/films/store', [FilmController::class, 'store']);

Route::get('/', function () {
    return view('welcome');
});