<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return $this->logUserIn($request->email, $request->password);
    }

    public function logUserIn($email, $password)
    {

        if (Auth::attempt(['email' => $email, 'password' => $password], 'true')) {
            $token = auth()->user()->createToken('loginToken')->plainTextToken;

            $loginCookie = cookie('logintoken', $token, 1440); // lasts for one day

            return response([
                'user' => auth()->user(),
                'message' => 'success'
            ])->withCookie($loginCookie);
        }



        return response([
            'message' => 'error'
        ]);
    }

    public function logout()
    {
        $logoutCookie = Cookie::forget('logintoken');
        // Auth::logout();
        auth()->user()->tokens()->delete();


        return response(['message' => 'success'])->withCookie($logoutCookie);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        // $user = User::where('email', $request->email)->first();


        // if (!$user || !Hash::check($request->password, $user->password)) {
        //     return response(['error' => 'please check your details again'], 401);
        // }
        return $this->logUserIn($request->email, $request->password);
    }

    public function getUser()
    {
        return response(['user' => auth()->user()]);
    }

    // public function getToken(Request $request)
    // {
    //     // $request->session()->regenerate();
    //     // $Ctoken = $request->session()->token();

    //     // $CsrfCookie = cookie('XSRF-TOKEN', $Ctoken, 1440);

    //     return response(['message' => 'success', 'token' => $Ctoken])->withCookie($CsrfCookie);
    // }
}
