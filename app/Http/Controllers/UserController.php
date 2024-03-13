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

    public function me(Request $request) {
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
            $response = User::create($all);
            $response->password_generated = $password_generated;

            return $response;
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
