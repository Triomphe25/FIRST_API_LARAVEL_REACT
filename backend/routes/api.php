<?php
use App\Http\Controllers\Api\FilmController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Tes routes API iront ici
Route::get('/test', function () {
    return response()->json(['message' => 'API working!']);
});
Route::post('/films/store', [FilmController::class, 'store']);
Route::get('/films', [FilmController::class, 'index']);