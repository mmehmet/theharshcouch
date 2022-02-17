<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostFormRequest;
use App\Post;
use App\User;
use Redirect;
use Auth;


class PostController extends Controller
{
    public function index()
    {
    	$posts = Post::orderBy('created_at','desc')->get();

    	return view('admin/index')
    		->with('name', 'Current Episodes')
    		->with('posts', $posts);
    }

    public function create()
    {
        if(!Auth::user()->can_post()) {
            return redirect(route('episodes'))
                ->withErrors([
                    'Nope!',
                    'You have not sufficient permission to make edisodes',
                ]);
        }

        return view('admin.create')
            ->with('name', 'New Episode');
    }

    public function store(PostFormRequest $request)
    {
        $post = new Post;
        $post->slug = str_slug($request->get('slug'));
        $post->author_id = Auth::user()->id;
        $post->title = $request->get('title');
        $post->body = $request->get('body');
        $post->description = $request->get('description');
        $post->quote = $request->get('quote');
        $post->audio_link = $request->get('audio_link');
        $post->size = $request->get('size');
        $post->duration = $request->get('duration');
        $post->active = $request->has('save') ? false : true;
        $post->save();
        $message = $post->active ? 'Episode published successfully' : 'Episode saved';

        return redirect(route('admin.edit', $post->slug))
            ->withMessage($message);
    }

    public function edit(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->first();

        if (!$post) {
            return redirect(route('admin.home'))
                ->withErrors([
                    'Wha?',
                    "Couldn't find the episode we're trying to edit, here...",
                ]);
        }

        if (!Auth::user()->is_admin() && Auth::user()->id != $post->author_id) {
            return redirect(route('admin'))
                ->withErrors([
                    'Nope!',
                    'You have not sufficient permission to edit edisodes',
                ]);
        }

        return view('admin.edit')
            ->with('name', "Edit $post->title")
            ->with('post',$post);
    }

    public function update(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->first();

        if (!$post) {
            return redirect(route('admin.home'))
                ->withErrors([
                    'Wha?',
                    "Couldn't find the episode we're trying to edit, here...",
                ]);
        }

        if (!Auth::user()->is_admin() && Auth::user()->id != $post->author_id) {
            return redirect(route('admin.home'))
                ->withErrors([
                    'Nope!',
                    'You have not sufficient permission to edit episodes',
                ]);
        }

        $slug_post = Post::where('slug', $post->slug)->first();
        if ($slug_post->id !== $post->id) {
            return redirect(route('admin.edit'))
                ->with('post',$post)
                ->withErrors([
                    'Nope!',
                    'This title already exists',
                ])
                ->withInput();
        }

        $post->title = $request->get('title');
        $post->body = $request->get('body');
        $post->description = $request->get('description');
        $post->quote = $request->get('quote');
        $post->audio_link = $request->get('audio_link');
        $post->size = $request->get('size');
        $post->duration = $request->get('duration');
        $post->active = $request->get('save') ? false : true;
        $post->save();
        $message = $post->active ? 'Episode updated successfully' : 'Episode saved';
        $redirect = $post->active ? "/episodes/$post->slug" : route('admin.edit', $post->slug);

        return redirect($redirect)
            ->withMessage($message);
    }

    public function destroy(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->first();

        if (!$post) {
            return redirect(route('admin.home'))
                ->withErrors([
                    'Wha?',
                    "Couldn't find the episode we're trying to delete",
                ]);
        }

        if (!Auth::user()->is_admin() && Auth::user()->id != $post->author_id) {
            return redirect(route('admin.home'))
                ->withErrors([
                    'Nope!',
                    'You have not sufficient permission to delete edisodes',
                ]);
        }

        $post->delete();

        return redirect(route('admin.home'))
            ->withMessage('Episode deleted successfully');
    }

}
