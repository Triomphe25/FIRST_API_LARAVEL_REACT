<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; // Correction : "Validator" au lieu de "Validater"
use Illuminate\Support\Facades\Hash;     // Correction : "Hash" au lieu de "Validater"
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
   
    public function register(Request $request)
    {
        $validations = Validator::make($request->all(), [ // Correction : "Validator" au lieu de "Validater"
            'name'=>'required|string',
            'email'=>'required|email|unique:users|max:345',
            'password'=>'required|min:4', // Suppression du doublon 'name'

        ]);
        
        if($validations->fails()){
            $errors = $validations->errors();

            return response()->json([
                'errors' => $errors,
                'status'=> 401
            ]);
        }

        if($validations->passes()){
            $user = User::create([
                "name"=> $request->name,
                "email"=> $request->email,
                "password"=> Hash::make($request->password) // Correction : "Hash" au lieu de "Validater"
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([ // Correction : "response" en minuscule
                'token' => $token,
                'type'=> 'Bearer'
            ]);
        }
    }
}