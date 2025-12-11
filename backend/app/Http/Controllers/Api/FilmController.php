<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $totalFilms = Film::all();
        return response()->json([
            'films'=>$totalFilms,
            'status'=>200
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) // RETIRER Film $film
    {
        $url =$request->url;
        $titre =$request->titre;
        $description =$request->description;

        if(!empty($url) && !empty($titre)){
            // CRÉER une nouvelle instance au lieu d'utiliser l'injection
            $film = new Film();
            $film->url=$url;
            $film->titre=$titre;
            $film->description=$description;
            $film->save();

            return response()->json(
                ['film'=>$film,
                 'status'=>200,
                 'msg'=>'Film inserer avec succes'
                
                ]
            );

        }else{
            return response()->json(
                [
                    'msg'=>'veillez remplir tout les champs',
                    'status'=> 400
                ]
                );
        }

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json([
            'film'=>Film::find($id),
            'status'=>200,
            'msg'=>'film recuperer'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}