<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome')->with('name', 'Home');
})->name('welcome');

Route::get('/live', function () {
    return view('live')->with('name', 'Listen Live');
})->name('live');

Route::get('/subscribe', function () {
    return view('subscribe')->with('name', 'Subscribe to Podcast');
})->name('subscribe');

Route::get('/about', 'GuestController@about')->name('about');

Route::get('/contact', 'GuestController@contact_form')->name('contact');

Route::post('/', 'GuestController@contactus')->name('contactus');

Route::get('/episodes', 'GuestController@index')->name('episodes');

Route::get('/episodes/{slug}', 'GuestController@show');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/notafeed.xml', 'GuestController@feed')->name('feed');

Auth::routes();

// check for logged in user
Route::group(['middleware' => ['auth'], 'prefix' => 'admin'], function()
{
	Route::get('home', ['as' => 'admin.home', 'uses' => 'PostController@index']);

	Route::post('update/{slug}', ['as' => 'admin.update', 'uses' => 'PostController@update']);

	Route::get('new-episode', 'PostController@create')->name('new-episode');

	Route::post('new-episode', ['as' => 'admin.store', 'uses' => 'PostController@store']);

	Route::get('edit/{slug}', ['as' => 'admin.edit', 'uses' => 'PostController@edit']);

	Route::get('delete/{id}', ['as' => 'admin.destroy', 'uses' => 'PostController@destroy']);

	//users
	Route::get('user/{id}','UserController@profile')->where('id', '[0-9]+');
	Route::get('my-all-episode','UserController@user_posts_all');
	Route::get('my-drafts','UserController@user_posts_draft');
});
