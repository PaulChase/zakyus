<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskCollection;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new TaskCollection(Task::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',

        ]);

        $task = new Task;
        $task->name = $request->input('name');
        $task->status =   $request->input('status');
        $task->project_id = $request->input('projectID');
        $task->save();

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getUserTasks(Request $request)
    {
        $projectID = $request->input('projectID');
        $query = $request->input('query');
        $project = Project::find($projectID);
        if (auth()->id() != $project->user->id) {
            return response()->json(['message' => 'unathorised'], 401);
        }
        $tasks = $project->tasks()->where('name', 'like', "%{$query}%")->orderBy('updated_at', 'desc')->get();
        return response()->json([
            'project' => $project,
            'tasks' => $tasks
        ]);
    }

    // change the task's status based on the status input received
    public function changeTaskStatus(Request $request)
    {
        $taskID = $request->input('id');
        $status = $request->input('status');

        $task = Task::find($taskID);
        $task->status = $status;
        $task->save();

        return response()->json(['message' => 'success']);
    }

    // public function searchTasks()
    // {
    //     $project = Project::find($id);
    //     if (auth()->id() != $project->user->id) {
    //         return response()->json(['message' => 'unathorised'], 401);
    //     }
    //     $tasks = $project->tasks()->where('project_id', $id)->orderBy('updated_at', 'desc')->get();
    // }
}
