<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Auth;


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



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);



Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('tasks', TaskController::class);
    Route::get('/usertasks/{id}', [TaskController::class, 'getUserTasks']);
    Route::resource('projects', ProjectController::class);
    Route::post('/changestatus', [TaskController::class, 'changeTaskStatus']);


    Route::post('/getuser', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
