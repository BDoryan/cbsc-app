<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Exception;

class UserAuthController extends Controller
{

    /**
     * IKQlLaBsENs2cvd
     * 1|t4CSWi1BVbE3YQdzlKpxYTXz96jElkRf2IzOWkmv
     */

    // login to user
    public function login(Request $request)
    {
        $all = $request->all();
        $validator = Validator::make($all, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors(), 422);

        $user = User::where('email', $all['email'])->first();

        if (!$user || !password_verify($all['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json(['token' => $token]);
    }

    // logout user
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
