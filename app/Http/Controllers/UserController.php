<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Exception;

class UserController extends Controller
{

    public function index()
    {
        $users = User::paginate(5);
        $users->load('licensed');
        $users->load('managing');

        return $users;
    }

    public function me(Request $request)
    {
        $user = $request->user();
        $user->load('licensed');
        $user->load('managing');

        return $user;
    }

    public function licensed()
    {
        return User::has('licensed')->paginate(5);
    }

    public function managing()
    {
        return User::has('managing')->get();
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function store(Request $request)
    {
        $all = $request->all();
        $validator = Validator::make($all, User::$rules);

        $all['created_at'] = date('Y-m-d H:i:s');
        $all['updated_at'] = date('Y-m-d H:i:s');

        $password_generated = substr(str_shuffle(str_repeat('abcdefghijklmnopqrstuvwxyz' . strtoupper('abcdefghijklmnopqrstuvwxyz') . '123456789', 5)), 0, 15);
        $all['password'] = bcrypt($password_generated);

        if ($validator->fails())
            return response()->json($validator->errors(), 422);

        try {
            if ($request->hasFile('profile_image')) {
                // Récupérer l'image depuis la requête
                $profileImage = $request->file('profile_image');

                // Enregistrer l'image dans le stockage (par exemple, le dossier public)
                $path = $profileImage->store('public/pictures/users/profile_image', 'public');

                // Stocker le chemin de l'image dans le tableau $all
                $all['picture'] = url('/storage/' . $path);
            } else {
                $sex = $all['sex'];
                if ($sex == User::SEX_MALE)
                    $all['picture'] = url('pictures/no-picture-male.jpg');
                else if ($sex == User::SEX_WOMEN)
                    $all['picture'] = url('pictures/no-picture-women.jpg');
            }

            $role = $all['role'];

            if (!empty($role)) {
                if ($role == User::ROLE_LICENSED) {
                    $validator = Validator::make($all, [
                        'license_number' => 'required|unique:licensed_users'
                    ]);

                    if ($validator->fails())
                        return response()->json($validator->errors(), 422);

                    $user = User::create($all);
                    $user->licensed()->create([
                        'license_number' => $all['license_number'],
                    ]);

                } else if ($role == User::ROLE_MANAGING) {
                    $user = User::create($all);
                    $user->managing()->create([
                        'role' => $all['role'],
                    ]);
                } else {
                    return response()->json(['message' => 'Invalid role'], 422);
                }
            }

            if(empty($user))
                $user = User::create($all);

            $user->password_generated = $password_generated;

            // Send email here

            return $user;
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return $user;
    }

    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $user;
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        return User::where('name', 'like', '%' . $search . '%')->paginate(25);
    }
}
